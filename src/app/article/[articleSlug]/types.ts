export interface Block {
    _type: 'block';
    _key: string;
    style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
    children: Array<Span>;
    markDefs?: Array<MarkDef>;
}

export interface Span {
    _type: 'span';
    _key: string;
    text: string;
    marks?: string[];
}

export interface MarkDef {
    _type: 'link';
    _key: string;
    href: string;
}

export interface Article {
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
    body: Array<Block>;
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

export interface TocSection {
    title: string;
    ref: string;
} 