import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  date: string;
  title: string;
  image: string;
  categories: string[];
  slug: string;
}

export default function Component() {
  const articles: Article[] = [
    {
      date: "14 AUGUST 2024",
      title:
        "ITV Highlight Cutting-Edge EV Skills Training at Lincoln College Group and IMI",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["Lincoln College", "News", "Higher Education"],
      slug: "itv-highlight-ev-training",
    },
    {
      date: "11 JULY 2024",
      title:
        "Lincoln College University Centre Celebrates National Student Survey Success 2024",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["Lincoln College", "News", "Higher Education"],
      slug: "national-student-survey-success",
    },
    {
      date: "08 JULY 2024",
      title: "Access to University Class of 2024 Celebration",
      image: "/placeholder.svg?height=400&width=600",
      categories: ["Lincoln College", "Higher Education", "News"],
      slug: "university-class-celebration",
    },
    // Add more articles as needed
  ];

  return (
    <div className="container mx-auto py-8 text-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="text-sm font-medium text-muted-foreground mb-3">
                {article.date}
              </div>
              <h2 className="text-xl font-bold leading-tight mb-4">
                {article.title}
              </h2>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                {article.categories.map((category, idx) => (
                  <Link
                    key={idx}
                    href={`/category/${category
                      .toLowerCase()
                      .replace(" ", "-")}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {category}
                    {idx < article.categories.length - 1 && ", "}
                  </Link>
                ))}
              </div>
              <Link
                href={`/article/${article.slug}`}
                className="flex items-center gap-2 text-sm font-medium hover:underline ml-auto"
              >
                Read more
                <ChevronRight className="h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "...", 48, 49].map((page, index) => (
          <Button
            key={index}
            variant={page === 1 ? "default" : "ghost"}
            className="w-10 h-10 p-0"
          >
            {page}
          </Button>
        ))}
      </div>
    </div>
  );
}
