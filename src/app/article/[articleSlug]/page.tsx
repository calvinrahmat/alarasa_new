import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText} from "@portabletext/react";
import type { Metadata, ResolvingMetadata } from "next";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import type { PortableTextBlock, PortableTextReactComponents } from "next-sanity";

export const runtime = 'edge';

type Props = {
  params: Promise<{ articleSlug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const articleQuery = `*[_type == "post" && slug.current == $articleSlug][0]{
  _id,
  title,
  slug,
  mainImage,
  body,
  publishedAt,
  author->{
    firstName,
    lastName
  },
  excerpt,
  coverImage,
  seo {
    metaTitle,
    metaDescription,
    nofollowAttributes,
    openGraph{
      title,
      description,
      siteName
    },
    seoKeywords,
    twitter{
      cardType,
      handle,
      site
    }
  }
}`;

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const { data: post } = await sanityFetch({
    query: articleQuery,
    params: { articleSlug: resolvedParams.articleSlug },
    stega: false,
  });
  
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.coverImage);

  return {
    title: post?.seo?.metaTitle || post?.title,
    description: post?.seo?.metaDescription || post?.excerpt,
    keywords: post?.seo?.seoKeywords,
    authors:
      post?.author?.firstName && post?.author?.lastName
        ? [{ name: `${post.author.firstName} ${post.author.lastName}` }]
        : [],
    openGraph: {
      title: post?.seo?.openGraph?.title || post?.title,
      description: post?.seo?.openGraph?.description || post?.seo?.metaDescription || post?.excerpt,
      siteName: post?.seo?.openGraph?.siteName,
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
    twitter: post?.seo?.twitter ? {
      card: post.seo.twitter.cardType,
      site: post.seo.twitter.site,
      creator: post.seo.twitter.handle,
    } : undefined,
    robots: {
      follow: !post?.seo?.nofollowAttributes,
      index: true,
    }
  } satisfies Metadata;
}


const components = {
  block: {
    h2: ({ children, value }: { children: React.ReactNode; value: any }) => (
      <h2 id={`section-${value._key}`} className="text-2xl sm:text-3xl font-bold my-3 break-words">
        {children}
      </h2>
    ),
    h3: ({ children, value }: { children: React.ReactNode; value: any }) => (
      <h3 id={`section-${value._key}`} className="text-xl sm:text-2xl font-semibold my-3 break-words">
        {children}
      </h3>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="my-4 break-words">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value?: { href: string; _type: string } }) => (
      <a href={value?.href} className="text-blue-600 hover:underline break-words">
        {children}
      </a>
    ),
  },
};

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(date).toLocaleDateString('en-US', options);
};

interface TocSection {
  title: string;
  ref: string;
}

function extractTocSections(body: PortableTextBlock[]): TocSection[] {
  const tocSections: TocSection[] = [];
  body?.forEach((block) => {
    if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
      const text = block.children
        .filter((child) => child._type === 'span')
        .map((child) => child.text)
        .join('');
      const headerId = `section-${block._key}`;
      tocSections.push({ title: text, ref: headerId });
    }
  });
  return tocSections;
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const { data: post } = await sanityFetch({ 
    query: articleQuery, 
    params: { articleSlug: resolvedParams.articleSlug }
  });

  if (!post?._id) {
    return notFound();
  }

  const tocSections = extractTocSections(post.body);

  return (
    <div className="px-4 sm:px-6 max-w-5xl mx-auto my-20 overflow-hidden">
      <section className="w-full mb-8 text-slate-800">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mt-4 px-2">
          {post.title}
        </h1>
        <div className="text-gray-600 text-sm text-center mt-2">
          <span>{formatDate(post.publishedAt)}</span>
        </div>
        <div className="relative w-full aspect-video mt-4">
          <Image
            src={urlForImage(post.mainImage).url()}
            alt={post.mainImage.alt || 'Article image'}
            fill
            className="object-cover rounded-lg object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </div>
      </section>

      <div className="flex flex-col lg:flex-row lg:space-x-8 text-slate-800">
        <aside className="hidden lg:block w-1/4 lg:sticky lg:top-6 h-max">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
            <nav>
              <ul className="space-y-2">
                {tocSections.map((section) => (
                  <li key={section.ref}>
                    <a
                      href={`#${section.ref}`}
                      className="text-sm text-gray-600 hover:text-blue-600 hover:underline block py-1"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <article className="w-full lg:w-3/4 prose prose-sm sm:prose lg:prose-lg prose-slate max-w-none overflow-hidden">
          <PortableText 
            value={post.body as PortableTextBlock[]}
            components={components as unknown as PortableTextReactComponents}
          />
        </article>
      </div>
    </div>
  );
}
