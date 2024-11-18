"use client"
import React, { useRef, useState} from "react";
import Image from "next/image"; 
type tParams = Promise<{ slug: string }>;

export default function Article({ params }: { params: tParams }) {
    // const articleTitle = React.use(params).articleTitle;
    // const { articleSlug } = await params;
    const [articleSlug, setArticleSlug] = useState<string>();
    params.then(value => setArticleSlug(value.slug))
    const subtitleRefs = {
        intro: useRef(null),
        section1: useRef(null),
        section2: useRef(null),
        conclusion: useRef(null),
    };

    const articleData = {
        date: "14 AUGUST 2024",
        title:
            "ITV Highlight Cutting-Edge EV Skills Training at Lincoln College Group and IMI",
        image: "/about-us2.jpg",
        categories: ["Lincoln College", "News", "Higher Education"],
        slug: articleSlug,
    }

    const scrollToSection = (ref:React.RefObject<HTMLDivElement>) => {
        if(ref.current){
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="p-6 max-w-5xl mx-auto space-y-12 my-20">
            {/* Title Section with Full-Width Image */}
            <section className="w-full mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mt-4">{articleData.title}</h1>
                <div className="text-gray-600 text-sm text-center mt-2">
                    <span>{articleData.date}</span> | <span>{articleData.categories.join(",")}</span>
                </div>
                <Image
                    src={articleData.image} // Replace with actual image path
                    alt={"Article Cover"}
                    width={500}  // specify appropriate width
                    height={300} // specify appropriate height
                    className="w-full h-64 object-cover rounded-lg my-4"
                />
            </section>

            {/* Content and TOC Section */}
            <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
                {/* Table of Contents */}
                <aside className="w-1/5 lg:sticky lg:top-6 h-max mr-6 ml-3">
                    <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                    <ul className="space-y-2 text-blue-600">
                        <li onClick={() => scrollToSection(subtitleRefs.intro)}
                            className="cursor-pointer hover:underline">
                            Introduction
                        </li>
                        <li onClick={() => scrollToSection(subtitleRefs.section1)}
                            className="cursor-pointer hover:underline">
                            Section 1
                        </li>
                        <li onClick={() => scrollToSection(subtitleRefs.section2)}
                            className="cursor-pointer hover:underline">
                            Section 2
                        </li>
                        <li onClick={() => scrollToSection(subtitleRefs.conclusion)}
                            className="cursor-pointer hover:underline">
                            Conclusion
                        </li>
                    </ul>
                </aside>

                {/* Blog Content */}
                <article className="w-3/4">
                    <section ref={subtitleRefs.intro} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Montes platea placerat rutrum class himenaeos nunc accumsan! Cubilia hendrerit lorem nam lacus nam. Purus nam malesuada elit suspendisse rhoncus venenatis tristique molestie. Ad adipiscing ex sapien odio efficitur. Duis dictumst elit luctus egestas, donec vel euismod. Parturient sociosqu sollicitudin non class dictumst commodo. Suspendisse ante mi donec vivamus arcu cras duis.</p>
                    </section>

                    <section ref={subtitleRefs.section1} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Section 1</h2>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Montes platea placerat rutrum class himenaeos nunc accumsan! Cubilia hendrerit lorem nam lacus nam. Purus nam malesuada elit suspendisse rhoncus venenatis tristique molestie. Ad adipiscing ex sapien odio efficitur. Duis dictumst elit luctus egestas, donec vel euismod. Parturient sociosqu sollicitudin non class dictumst commodo. Suspendisse ante mi donec vivamus arcu cras duis.</p>
                    </section>

                    <section ref={subtitleRefs.section2} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Section 2</h2>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Montes platea placerat rutrum class himenaeos nunc accumsan! Cubilia hendrerit lorem nam lacus nam. Purus nam malesuada elit suspendisse rhoncus venenatis tristique molestie. Ad adipiscing ex sapien odio efficitur. Duis dictumst elit luctus egestas, donec vel euismod. Parturient sociosqu sollicitudin non class dictumst commodo. Suspendisse ante mi donec vivamus arcu cras duis.</p>
                    </section>

                    <section ref={subtitleRefs.conclusion} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Montes platea placerat rutrum class himenaeos nunc accumsan! Cubilia hendrerit lorem nam lacus nam. Purus nam malesuada elit suspendisse rhoncus venenatis tristique molestie. Ad adipiscing ex sapien odio efficitur. Duis dictumst elit luctus egestas, donec vel euismod. Parturient sociosqu sollicitudin non class dictumst commodo. Suspendisse ante mi donec vivamus arcu cras duis.</p>
                    </section>
                </article>
            </div>
        </div>
    );
}