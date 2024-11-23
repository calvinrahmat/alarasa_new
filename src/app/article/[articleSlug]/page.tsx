"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

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
    body: Array<{
        _key: string;
        _type: string;
        style: string;
        children: Array<{
            _key: string;
            _type: string;
            text: string;
        }>;
    }>;
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
            body
        }`;
        const param = { articleSlug };
        client.fetch(query, param)
            .then((data) => {
                setArticleData(data);
            })
            .catch(console.error);
    }, [articleSlug]);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const renderBodyContent = () => {
        const toc: { title: string; ref: string }[] = [];
        return articleData?.body.map((block) => {
            const { _key, style, children } = block;
            const text = children.map((child) => child.text).join('');

            let Tag:React.ElementType = 'p'; // default to <p> if no style
            let headerId = ''; // Default header id for normal paragraphs

            if (style === 'h2') {
                Tag = 'h2';
                headerId = `section-${_key}`;
            } else if (style === 'h3') {
                Tag = 'h3';
                headerId = `section-${_key}`;
            }

            // If the block is a header (h2 or h3), create a ref and add to TOC
            if (headerId) {
                if (!subtitleRefs[headerId]) {
                    subtitleRefs[headerId] = React.createRef();
                }
                toc.push({ title: text, ref: headerId });
            }

            return (
                <Tag key={_key} id={headerId} ref={subtitleRefs[headerId]} className={style === 'h2' ? 'text-3xl font-bold my-3' : style === 'h3' ? 'text-2xl font-semibold my-3' : ''}>
                    {text}
                </Tag>
            );
        });
    };

    useEffect(() => {
        if (articleData) {
            const tocSections:TocSection[] = [];
            articleData.body.forEach((block) => {
                const { _key, style, children } = block;
                const text = children.map((child) => child.text).join('');

                if (style === 'h2' || style === 'h3') {
                    const headerId = `section-${_key}`;
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
        <div className="p-6 max-w-5xl mx-auto space-y-12 my-20">
            {/* Title Section with Full-Width Image */}
            <section className="w-full mb-12 text-black">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mt-4">{articleData.title}</h1>
                <div className="text-gray-600 text-sm text-center mt-2">
                    <span>{formatDate(articleData.publishedAt)}</span> | <span>{articleData.categories.map((cat) => cat.title).join(", ")}</span>
                </div>{articleData.categories.join(",")}
                <Image
                    src={urlForImage(articleData.mainImage).url()}
                    alt={articleData.mainImage.alt || 'Article image'}
                    width={500}  // specify appropriate width
                    height={300} // specify appropriate height
                    className="w-full h-64 object-cover rounded-lg my-4"
                />
            </section>

            {/* Content and TOC Section */}
            <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 text-black">
                {/* Table of Contents */}
                <aside className="w-1/5 lg:sticky lg:top-6 h-max mr-6 ml-3">
                    <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                    <ul className="space-y-2 text-blue-600">
                        {tocSections.map((section) => (
                            <li
                                key={section.ref}
                                onClick={() => scrollToSection(subtitleRefs[section.ref])}
                                className="cursor-pointer hover:underline"
                            >
                                {section.title}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Blog Content */}
                <article className="w-3/4 text-black">
                    <section>{renderBodyContent()}</section>
                </article>
            </div>
        </div>
    );
}
