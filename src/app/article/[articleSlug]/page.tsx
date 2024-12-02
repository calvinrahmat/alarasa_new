"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { NextSeo } from "next-seo";


interface Article {
    title: string;
    slug: { current: string; _type: 'slug' };
    author: { _ref: string; _type: 'reference' };
    mainImage: {
        _type: 'image';
        alt: string;
        asset: {
            _ref?: string;
            url?: string;
        };
    };
    categories: Array<{
        _ref: string;
        _type: 'reference';
        _key: string;
        title: string;
        color: string;
    }>;
    publishedAt: string;
    body: Array<any>;
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        nofollowAttributes?: boolean;
        openGraph?: {
            title?: string;
            description?: string;
            url?: string;
            siteName?: string;
        };
        seoKeywords?: string[];
        twitter?: {
            cardType?: string;
            handle?: string;
            site?: string;
            creator?: string;
        };
    };
}

interface TocSection {
    title: string;
    ref: string;
}

export default function Article() {
    const { articleSlug } = useParams();
    const [articleData, setArticleData] = useState<Article | null>(null);
    const subtitleRefs: { [key: string]: React.RefObject<HTMLHeadingElement> } = {};
    const [tocSections, setTocSections] = useState<TocSection[]>([]);



    const components: Partial<PortableTextReactComponents> = {
        block: {
            h2: ({ children, value }) => {
                const headerId = `section-${value._key}`;
                return (
                    <h2 id={headerId} ref={(el) => {
                        if (el && !subtitleRefs[headerId]) {
                            subtitleRefs[headerId] = { current: el };
                        }
                    }} className="text-2xl sm:text-3xl font-bold my-3 break-words">
                        {children}
                    </h2>
                );
            },
            h3: ({ children, value }) => {
                const headerId = `section-${value._key}`;
                return (
                    <h3 id={headerId} ref={(el) => {
                        if (el && !subtitleRefs[headerId]) {
                            subtitleRefs[headerId] = { current: el };
                        }
                    }} className="text-xl sm:text-2xl font-semibold my-3 break-words">
                        {children}
                    </h3>
                );
            },
            normal: ({ children }) => <p className="my-4 break-words">{children}</p>,
        },
        marks: {
            link: ({ children, value }) => (
                <a href={value?.href} className="text-blue-600 hover:underline break-words">
                    {children}
                </a>
            ),
        },
    };

    useEffect(() => {
        const query = `*[_type == "post" && slug.current == $articleSlug][0]{
            title,
            slug,
            author,
            mainImage,
            categories[]->{
                title,
                color
            },
            publishedAt,
            body,
            seo {
                _type,
                metaTitle,
                metaDescription,
                nofollowAttributes,
                openGraph{
                _type,
                title,
                url,
                description,
                siteName
                },
                seoKeywords,
                twitter{
                _type,
                cardType,
                handle,
                site,
                creator
                }
            }
        }`;
        const param = { articleSlug };
        client.fetch(query, param)
            .then((data) => {
                setArticleData(data);
            })
            .catch(console.error);
    }, [articleSlug]);

    
    const scrollToSection = (ref: { current: HTMLElement | null }) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (articleData) {
            const tocSections: TocSection[] = [];
            articleData.body.forEach((block) => {
                if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
                    const text = block.children
                        .filter((child: { _type: string }) => child._type === 'span')
                        .map((child: { text: string }) => child.text)
                        .join('');
                    const headerId = `section-${block._key}`;
                    tocSections.push({ title: text, ref: headerId });
                }
            });
            setTocSections(tocSections);
        }
    }, [articleData]);

    const formatDate = (date: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(date).toLocaleDateString('en-US', options);
        return formattedDate;
    };

    if (!articleData) {
        return <div>Loading...</div>; // Show loading while data is being fetched
    }

    return (
        <>
        <NextSeo
            title={articleData.seo?.metaTitle || articleData.title}
            description={articleData.seo?.metaDescription || articleData.body?.[0]?.children?.[0]?.text?.slice(0, 160)}
            noindex={articleData.seo?.nofollowAttributes}
            nofollow={articleData.seo?.nofollowAttributes}
            openGraph={{
                title: articleData.seo?.openGraph?.title || articleData.seo?.metaTitle || articleData.title,
                description: articleData.seo?.openGraph?.description || articleData.seo?.metaDescription,
                url: articleData.seo?.openGraph?.url,
                siteName: articleData.seo?.openGraph?.siteName,
                images: [
                    {
                        url: urlForImage(articleData.mainImage).url(),
                        alt: articleData.mainImage.alt || articleData.title,
                    },
                ],
                type: 'article',
            }}
            twitter={{
                cardType: articleData.seo?.twitter?.cardType || 'summary_large_image',
                handle: articleData.seo?.twitter?.handle,
                site: articleData.seo?.twitter?.site,
            }}
            additionalMetaTags={[
                {
                    name: 'keywords',
                    content: articleData.seo?.seoKeywords?.join(', ') || '',
                },
            ]}
        />
        
        <div className="px-4 sm:px-6 max-w-5xl mx-auto my-20 overflow-hidden">
            {/* Title Section with Full-Width Image */}
            <section className="w-full mb-8 text-slate-800">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mt-4 px-2">{articleData.title}</h1>
                <div className="text-gray-600 text-sm text-center mt-2">
                    <span>{formatDate(articleData.publishedAt)}</span>
                </div>
                <div className="relative w-full aspect-video mt-4">
                    <Image
                        src={urlForImage(articleData.mainImage).url()}
                        alt={articleData.mainImage.alt || 'Article image'}
                        fill
                        className="object-cover rounded-lg object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    />
                </div>
            </section>

            {/* Content and TOC Section */}
            <div className="flex flex-col lg:flex-row lg:space-x-8 text-slate-800">
                {/* Table of Contents */}
                <aside className="hidden lg:block w-1/5 lg:sticky lg:top-6 h-max">
                    <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                    <ul className="space-y-2 text-blue-600">
                        {tocSections.map((section) => (
                            <li
                                key={section.ref}
                                onClick={() => scrollToSection(subtitleRefs[section.ref])}
                                className="cursor-pointer hover:underline text-sm"
                            >
                                {section.title}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Blog Content */}
                <article className="w-full lg:w-3/4 prose prose-sm sm:prose lg:prose-lg prose-slate max-w-none overflow-hidden">
                    <PortableText 
                        value={articleData.body}
                        components={components}
                    />
                </article>
            </div>
        </div>
        </>
    );
}
