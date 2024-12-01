"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {useState,useEffect} from "react";
import {useRouter} from "next/navigation";
import { client } from '@/sanity/lib/client'; // Adjust the path as necessary
import { urlForImage } from '@/sanity/lib/image'; // Add this import

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
  body: string;
}

export default function Component() {
  const router = useRouter();
  const [articles,setArticles]=useState<Article[]>([]);
  useEffect(() => {
    const fetchArticles = async () => {
      const query = `*[_type == "post"]{
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
      const fetchedArticles = await client.fetch(query);
      setArticles(fetchedArticles);
    };
    fetchArticles();
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this component only re-renders on the client
    setCurrentPage(1); // Set default page only after client mount
  }, []);

  const [articlesPerPage, setArticlesPerPage] = useState(3);
  
  useEffect(() => {
    const updateArticlesPerPage = () => {
      if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        setArticlesPerPage(4); // Medium screens
      } else {
        setArticlesPerPage(3); // Small and Large screens
      }
    };

    updateArticlesPerPage(); // Set initial value
    window.addEventListener("resize", updateArticlesPerPage);
    return () => window.removeEventListener("resize", updateArticlesPerPage);
  }, []);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedArticles: Article[] = articles.slice(
      (currentPage - 1) * articlesPerPage,
      currentPage * articlesPerPage
  );

  return (
    <>
      {isClient && (
        <div className="container mx-auto py-8 text-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedArticles.map((article, index) => (
              <Card
                key={index}
                onClick={() => router.push(`/article/${article.slug.current}`)}
                className="overflow-hidden rounded-lg shadow-lg max-w-sm mx-auto"
              >
                <div className="relative w-full h-48 md:h-56 lg:h-64">
                  {article.mainImage && (
                    <Image
                      src={urlForImage(article.mainImage)
                        .url()}
                      alt={article.mainImage.alt || 'Article image'}
                      fill
                      className="object-cover rounded-t-lg"
                      priority={index === 0}
                    />
                  )}
                </div>
                <CardContent className="p-4 lg:p-6">
                  <div className="text-xs md:text-sm font-medium text-muted-foreground mb-2">
                    {new Date(article.publishedAt).toLocaleDateString('en-UK', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric'
                    }).replace(
                      /([A-Za-z]+)/,
                      (match) => match.toUpperCase()
                    )}
                  </div>
                  <h2 className="text-lg md:text-xl font-bold leading-tight mb-2">
                    {article.title}
                  </h2>
                </CardContent>
                <CardFooter className="p-4 lg:p-6 pt-0 flex flex-col gap-2">
                  {/* Categories will need to be fetched separately or included in the initial query */}
                  
                  <Link
                    href={`/article/${article.slug.current}`}
                    className="flex items-center gap-1 text-sm font-medium hover:underline ml-auto"
                  >
                    Read more
                    <ChevronRight className="h-4 w-4"/>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
  
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index}
                variant={index + 1 === currentPage ? "default" : "ghost"}
                className="w-10 h-10 p-0"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
