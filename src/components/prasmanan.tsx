"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Component() {
  const menuItems = [
    {
      name: "Nasi Berkat",
      items: [
        "Nasi Gurih",
        "Ayam Suwir Kecap",
        "Telor Balado",
        "Tumis Kangkung Terasi",
        "Bihun Goreng",
        "Sambel Bawang",
        "Kerupuk",
        "Lalapan",
      ],
    },
    {
      name: "Nasi Bedhaya",
      items: [
        "Nasi Gurih",
        "Ayam Suwir Opor",
        "Telor Balado",
        "Tumis Kangkung Terasi",
        "Bihun Goreng",
        "Sambel Bawang",
        "Kerupuk",
        "Lalapan",
      ],
    },
    {
      name: "Nasi Ayam Woku",
      items: [
        "Nasi Putih",
        "Ayam Woku",
        "Tumis Kangkung",
        "Tempe Orek",
        "Mie Goreng",
        "Sambel Alarasa",
        "Kerupuk",
        "Lalapan",
      ],
    },
    {
      name: "Nasi Bakso",
      items: [
        "Nasi Putih",
        "Tumis Bakso Ayam",
        "Capcay",
        "Tumis Kacang Panjang",
        "Mie Goreng",
        "Kerupuk",
        "Lalapan",
      ],
    },
    {
      name: "Nasi Parahyangan",
      items: [
        "Nasi Gurih",
        "Ayam Bumbu Seblak",
        "Telur Dadar",
        "Kentang Balado",
        "Bihun Goreng",
        "Sambel Alarasa",
        "Kerupuk",
        "Lalapan",
      ],
    },
    {
      name: "Nasi Saikoro",
      items: [
        "Nasi Putih",
        "Saikoro Cah Toge",
        "Kentang Balado",
        "Buncis XO",
        "Mie Goreng",
        "Sambel Bawang",
        "Kerupuk",
        "Lalapan",
      ],
    },
  ];

  return (
    <div className="bg-[#EBEBE5] text-white min-h-screen py-8">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl mb-4 text-center font-bold text-black">
          Menu Basic
        </h1>
        <p className="text-2xl font-semibold text-center mb-6 text-black">
          Rp 35.000
        </p>
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
                        <Check size={16} className="text-black" />
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
