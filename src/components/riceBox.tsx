"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface MenuItem {
  name: string;
  items: string[];
}

interface RiceBoxProps {
  title: string;
  menuItems: MenuItem[];
}

export default function RiceBox({ title, menuItems }: RiceBoxProps) {
  return (
    <div className="bg-[#EBEBE5] text-white  py-8">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl mb-4 text-center font-bold text-slate-800">
          {title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuItems.map((item, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {item.items.map((subItem, subIndex) => (
                    <div key={subIndex} className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-yellow-300 flex items-center justify-center">
                        <Check size={16} className="text-slate-800" />
                      </div>
                      <span className="text-sm font-medium leading-none">
                        {subItem}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
