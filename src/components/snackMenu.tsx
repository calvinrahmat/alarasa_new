"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuItem {
  name: string;
  items: Array<{
    name: string;
    price: string;
  }>;
}

interface SnackMenuProps {
  title: string;
  menuItems: MenuItem[];
}

export default function SnackMenu({ title, menuItems }: SnackMenuProps) {
  return (
    <div className="bg-[#EBEBE5] text-white min-h-screen py-8">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl mb-4 text-center font-bold text-slate-800">
          {title}
        </h1>
        <h2 className="text-xl mb-4 text-center font-bold text-slate-800">
          Harga Satuan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuItems.map((category, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm font-medium leading-none text-gray-700">
                        {item.name}
                      </span>
                      <span className="text-sm font-bold text-green-600 ml-2">
                        {item.price}
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
