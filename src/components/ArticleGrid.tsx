"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {useState,useEffect} from "react";
import {useRouter} from "next/navigation";

interface Article {
  date: string;
  title: string;
  image: string;
  categories: string[];
  slug: string;
}

export default function Component() {
  const router = useRouter();
  const [articles,setArticles]=useState<Article[]>([]);
  useEffect(() => {
    setArticles(
        [
          {
            date: "14 AUGUST 2024",
            title:
                "ITV Highlight Cutting-Edge EV Skills Training at Lincoln College Group and IMI",
            image: "/about-us2.jpg",
            categories: ["Lincoln College", "News", "Higher Education"],
            slug: "itv-highlight-ev-training",
          },
          {
            date: "11 JULY 2024",
            title:
                "Lincoln College University Centre Celebrates National Student Survey Success 2024",
            image: "/about-us2.jpg",
            categories: ["Lincoln College", "News", "Higher Education"],
            slug: "national-student-survey-success",
          },
          {
            date: "08 JULY 2024",
            title: "Access to University Class of 2024 Celebration",
            image: "/about-us2.jpg",
            categories: ["Lincoln College", "Higher Education", "News"],
            slug: "university-class-celebration",
          },
          {
            date: "08 JULY 2024",
            title: "Access to University Class of 2024 Celebration",
            image: "/about-us2.jpg",
            categories: ["Lincoln College", "Higher Education", "News"],
            slug: "university-class-celebration",
          },
          {
            date: "08 JULY 2024",
            title: "Access to University Class of 2024 Celebration",
            image: "/about-us2.jpg",
            categories: ["Lincoln College", "Higher Education", "News"],
            slug: "university-class-celebration",
          },
          {
            date: "08 JULY 2024",
            title: "Access to University Class of 2024 Celebration",
            image: "/about-us2.jpg",
            categories: ["Lincoln College", "Higher Education", "News"],
            slug: "university-class-celebration",
          },
          {
            date: "08 JULY 2024",
            title: "Access to University Class of 2024 Celebration",
            image: "/about-us2.jpg",
            categories: ["Lincoln College", "Higher Education", "News"],
            slug: "university-class-celebration",
          },
          {
            date: "08 JULY 2024",
            title: "Access to University Class of 2024 Celebration",
            image: "/about-us2.jpg",
            categories: ["Lincoln College", "Higher Education", "News"],
            slug: "university-class-celebration",
          },
          {
            date: "08 JULY 2024",
            title: "Access to University Class of 2024 Celebration",
            image: "/about-us2.jpg",
            categories: ["Lincoln College", "Higher Education", "News"],
            slug: "university-class-celebration",
          },
          // Add more articles as needed
        ]
    )
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
      if (window.innerWidth < 640) {
        setArticlesPerPage(1); // Small screens
      } else if (window.innerWidth < 1024) {
        setArticlesPerPage(2); // Medium screens
      } else {
        setArticlesPerPage(3); // Large screens
      }
    };

    updateArticlesPerPage(); // Set initial value

    window.addEventListener("resize", updateArticlesPerPage);
    return () => window.removeEventListener("resize", updateArticlesPerPage);
  }, []);

// Avoid rendering pagination until on the client
//   if (!isClient) return null;


  // const [currentPage, setCurrentPage] = useState(1);
  // useEffect(() => {
  //   setCurrentPage(1); // Ensure the page is set on the client after hydration
  // }, []);
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
                        onClick={() => router.push(`/article/${article.slug}`)}
                        className="overflow-hidden rounded-lg shadow-lg max-w-sm mx-auto"
                    >
                      <div className="relative w-full h-48 md:h-56 lg:h-64">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardContent className="p-4 lg:p-6">
                        <div className="text-xs md:text-sm font-medium text-muted-foreground mb-2">
                          {article.date}
                        </div>
                        <h2 className="text-lg md:text-xl font-bold leading-tight mb-2">
                          {article.title}
                        </h2>
                      </CardContent>
                      <CardFooter className="p-4 lg:p-6 pt-0 flex flex-col gap-2">
                        <div className="flex flex-wrap gap-2">
                          {article.categories.map((category, idx) => (
                              <Link
                                  key={idx}
                                  href={`/category/${category
                                      .toLowerCase()
                                      .replace(" ", "-")}`}
                                  className="text-xs md:text-sm text-primary hover:underline"
                              >
                                {category}
                                {idx < article.categories.length - 1 && ", "}
                              </Link>
                          ))}
                        </div>
                        <Link
                            href={`/article/${article.slug}`}
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
