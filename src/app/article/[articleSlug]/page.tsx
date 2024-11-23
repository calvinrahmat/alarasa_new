"use client"
import React, { useRef, useState, useEffect} from "react";
import Image from "next/image";
// import {useRouter} from "next/router";
import {useRouter,useSearchParams,useParams} from "next/navigation";
import {client} from "@/sanity/lib/client";
import {urlForImage} from "@/sanity/lib/image";
// type tParams = Promise<{ slug: string }>;
// const slug = (await params).articleSlug
// type ArticleData = {
//     title: string;
//     slug: string;
//     author: string;
//     mainImage: never;
//     categories: string[];
//     publishedAt:string;
//     body:[];
// };
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

export default function Article({params,}: { params: { articleSlug: string } }) {

    const subtitleRefs = {
        intro: useRef(null),
        section1: useRef(null),
        section2: useRef(null),
        conclusion: useRef(null),
    };
    const {articleSlug}=useParams();

    // const articleData = {
    //     date: "14 AUGUST 2024",
    //     title:
    //         "ITV Highlight Cutting-Edge EV Skills Training at Lincoln College Group and IMI",
    //     image: "/about-us2.jpg",
    //     categories: ["Lincoln College", "News", "Higher Education"],
    //     slug: React.use(params).articleSlug,
    // }

    // const [articleData, setArticleData] = useState<Article>({
    //     title: "",
    //     slug: { current: "", _type: 'slug' },
    //     author: { _ref: "", _type: 'reference' },
    //     mainImage: {
    //         _type: 'image',
    //         alt: "",
    //         asset: {
    //             _ref: "",
    //             url: "",
    //         },
    //     },
    //     categories: {
    //         _ref: "",
    //         _type: 'reference',
    //         _key: "",
    //         title: "",
    //         color: "",
    //     },
    //     publishedAt: "",
    //     body: "",
    // });

    const [articleData, setArticleData] = useState<Article|null>(null);

    useEffect(() => {
      //   console.log(articleSlug);
      //   const fetchArticles = async (articleSlug:string|string[]|undefined) => {
      //       const query = `*[_type == "post" && slug.current == $articleSlug][0]{
      //   title,
      //   slug,
      //   author,
      //   mainImage,
      //   categories[]->{
      //     title,
      //     color
      //   },
      //   publishedAt,
      //   body
      // }`;
      //       console.log(query);
      //       const param = { articleSlug };
      //       const fetchedArticles = await client.fetch(query,param);
      //       console.log(fetchedArticles);
      //       setArticleData(fetchedArticles);
      //       console.log(articleData);
      //   };
      //   fetchArticles(articleSlug);
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
        client.fetch(query,param)
            .then((data)=>setArticleData(data))
            .catch(console.error);
    }, []);

    // console.log(articleData);

    const scrollToSection = (ref:React.RefObject<HTMLDivElement>) => {
        if(ref.current){
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!articleData) {
        return <div>Loading...</div>; // Show loading while data is being fetched
    } else {
        console.log(articleData)
    }

    // const renderBodyContent = () => {
    //     return articleData.body.map((block) => {
    //         const { _key, _type, style, children } = block;
    //
    //         let Tag = 'p'; // default to <p> if no style
    //         if (style === 'h2') Tag = 'h2';
    //         if (style === 'h3') Tag = 'h3';
    //         if (style === 'normal') Tag = 'p';
    //
    //         return (
    //             <Tag key={_key} className={style === 'h2' ? 'text-3xl font-bold' : style === 'h3' ? 'text-2xl font-semibold' : ''}>
    //                 {children.map((child) => child.text).join('')}
    //             </Tag>
    //         );
    //     });
    // };

    const tocSections: { title: string; ref: string }[] = [];
    const renderBodyContent = () => {

        // Iterate over body content to generate dynamic refs and TOC
        return articleData.body.map((block) => {
            const { _key, _type, style, children } = block;
            const text = children.map((child) => child.text).join('');

            let Tag = 'p'; // default to <p> if no style
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
                tocSections.push({ title: text, ref: headerId });
            }

            return (
                <Tag key={_key} id={headerId} className={style === 'h2' ? 'text-3xl font-bold' : style === 'h3' ? 'text-2xl font-semibold' : ''}>
                    {text}
                </Tag>
            );
        });
    };

    return (
        <div className="p-6 max-w-5xl mx-auto space-y-12 my-20">
            {/* Title Section with Full-Width Image */}
            <section className="w-full mb-12 text-black">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mt-4">{articleData.title||"aa"}</h1>
                <div className="text-gray-600 text-sm text-center mt-2">
                    {/*<span>{articleData.date}</span> | <span>{articleData.categories.join(",")}</span>*/}
                </div>
                <Image
                    src={urlForImage(articleData.mainImage)
                        .url()}
                    alt={articleData.mainImage.alt || 'Article image'}
                    width={500}  // specify appropriate width
                    height={300} // specify appropriate height
                    className="w-full h-64 object-cover rounded-lg my-4"
                />
            </section>

            {/*/!* Content and TOC Section *!/*/}
            {/*<div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">*/}
            {/*    /!* Table of Contents *!/*/}
            {/*    <aside className="w-1/5 lg:sticky lg:top-6 h-max mr-6 ml-3">*/}
            {/*        <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>*/}
            {/*        <ul className="space-y-2 text-blue-600">*/}
            {/*            <li onClick={() => scrollToSection(subtitleRefs.intro)}*/}
            {/*                className="cursor-pointer hover:underline">*/}
            {/*                Introduction*/}
            {/*            </li>*/}
            {/*            <li onClick={() => scrollToSection(subtitleRefs.section1)}*/}
            {/*                className="cursor-pointer hover:underline">*/}
            {/*                Section 1*/}
            {/*            </li>*/}
            {/*            <li onClick={() => scrollToSection(subtitleRefs.section2)}*/}
            {/*                className="cursor-pointer hover:underline">*/}
            {/*                Section 2*/}
            {/*            </li>*/}
            {/*            <li onClick={() => scrollToSection(subtitleRefs.conclusion)}*/}
            {/*                className="cursor-pointer hover:underline">*/}
            {/*                Conclusion*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </aside>*/}
            
            {/*    /!* Blog Content *!/*/}
            {/*    <article className="w-3/4 text-black">*/}
            {/*        /!*<section ref={subtitleRefs.intro} className="mb-8">*!/*/}
            {/*        /!*    <h2 className="text-2xl font-semibold mb-4">Introduction</h2>*!/*/}
            {/*        /!*    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Montes platea placerat rutrum class himenaeos nunc accumsan! Cubilia hendrerit lorem nam lacus nam. Purus nam malesuada elit suspendisse rhoncus venenatis tristique molestie. Ad adipiscing ex sapien odio efficitur. Duis dictumst elit luctus egestas, donec vel euismod. Parturient sociosqu sollicitudin non class dictumst commodo. Suspendisse ante mi donec vivamus arcu cras duis.</p>*!/*/}
            {/*        /!*</section>*!/*/}
            
            {/*        /!*<section ref={subtitleRefs.section1} className="mb-8">*!/*/}
            {/*        /!*    <h2 className="text-2xl font-semibold mb-4">Section 1</h2>*!/*/}
            {/*        /!*    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Montes platea placerat rutrum class himenaeos nunc accumsan! Cubilia hendrerit lorem nam lacus nam. Purus nam malesuada elit suspendisse rhoncus venenatis tristique molestie. Ad adipiscing ex sapien odio efficitur. Duis dictumst elit luctus egestas, donec vel euismod. Parturient sociosqu sollicitudin non class dictumst commodo. Suspendisse ante mi donec vivamus arcu cras duis.</p>*!/*/}
            {/*        /!*</section>*!/*/}
            
            {/*        /!*<section ref={subtitleRefs.section2} className="mb-8">*!/*/}
            {/*        /!*    <h2 className="text-2xl font-semibold mb-4">Section 2</h2>*!/*/}
            {/*        /!*    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Montes platea placerat rutrum class himenaeos nunc accumsan! Cubilia hendrerit lorem nam lacus nam. Purus nam malesuada elit suspendisse rhoncus venenatis tristique molestie. Ad adipiscing ex sapien odio efficitur. Duis dictumst elit luctus egestas, donec vel euismod. Parturient sociosqu sollicitudin non class dictumst commodo. Suspendisse ante mi donec vivamus arcu cras duis.</p>*!/*/}
            {/*        /!*</section>*!/*/}
            
            {/*        /!*<section ref={subtitleRefs.conclusion} className="mb-8">*!/*/}
            {/*        /!*    <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>*!/*/}
            {/*        /!*    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Montes platea placerat rutrum class himenaeos nunc accumsan! Cubilia hendrerit lorem nam lacus nam. Purus nam malesuada elit suspendisse rhoncus venenatis tristique molestie. Ad adipiscing ex sapien odio efficitur. Duis dictumst elit luctus egestas, donec vel euismod. Parturient sociosqu sollicitudin non class dictumst commodo. Suspendisse ante mi donec vivamus arcu cras duis.</p>*!/*/}
            {/*        /!*</section>*!/*/}
            {/*        <section className="mb-8">*/}
            {/*            {renderBodyContent()}*/}
            {/*        </section>*/}
            {/*    </article>*/}

            {/* Content and TOC Section */}
            <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 text-black">
                {/* Table of Contents */}
                <aside className="w-1/5 lg:sticky lg:top-6 h-max mr-6 ml-3">
                    <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                    <ul className="space-y-2 text-blue-600">
                        {tocSections.map((section) => (
                            <li key={section.ref} onClick={() => scrollToSection(subtitleRefs[section.ref])} className="cursor-pointer hover:underline">
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