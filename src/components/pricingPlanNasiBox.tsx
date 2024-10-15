import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface Feature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  features: Feature[];
  cta: string;
  isBestSeller?: boolean;
}

interface PricingComponentProps {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

export default function PricingComponent({
  title,
  subtitle,
  plans,
}: PricingComponentProps) {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl items-center justify-center">
            {title}
          </h2>
          <p className="mt-4 text-xl text-gray-600">{subtitle}</p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-2">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="flex flex-col justify-between relative"
            >
              {plan.isBestSeller && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-white px-2 py-1 rounded-tr rounded-bl text-xs font-semibold flex items-center">
                  <Star className="w-4 h-4 mr-1" /> Best Seller
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center">
                  {plan.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center flex flex-col items-center justify-center gap-2">
                  <span className="text-3xl font-extrabold">{plan.price}</span>
                  {/* <span className="text-xl font-bold">
                    Menu yang dapat dipilih
                  </span> */}
                </div>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start">
                      <p
                        className={`text-base ${
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        {feature.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href="https://api.whatsapp.com/send?phone=6285280730787&text=Halo%20Minrasa!%20Mau%20tanya-tanya%20tentang%20paket%20catering%20Alarasa"
                  passHref
                  className="items-center justify-center w-full"
                >
                  <Button
                    className="w-full"
                    variant={
                      plan.name.toLowerCase() === "pro" ? "default" : "outline"
                    }
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
