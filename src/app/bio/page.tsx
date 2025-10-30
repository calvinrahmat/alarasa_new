'use client';

export const runtime = 'edge';

import React from 'react';
import LinkButton from '@/components/LinkButton';
import ProfileHeader from '@/components/ProfileHeader';
import { Card } from '@/components/ui/card';
import CustomerLogos from '@/components/CustomerLogos';
import Image from 'next/image';
import { Utensils, Globe, Building2, MapPin } from 'lucide-react';

const Index = () => {
  const whatsappUrl = `https://wa.me/6285280730787?text=${encodeURIComponent(
    "Halo MinRasa! Saya tertarik dengan catering Alarasa, boleh tanya tanya?"
  )}`;

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bio.png"
          alt="Bio background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#141e14]/10 z-10" />

      {/* Content */}
      <div className="relative z-20 py-2 px-4 text-white">
        <div className="max-w-md mx-auto">
          <Card className="p-8 bg-white/10 backdrop-blur-sm shadow-lg rounded-xl border-white/20">
            <ProfileHeader />

            <div className="mt-8">
              <CustomerLogos />
            </div>
            <div className="flex flex-col space-y-4 mt-8">
              <LinkButton 
                href="https://drive.google.com/file/d/1E8ZZz3Rb9D9Ips_d_anPL627zSUisQ-R/view?usp=sharing"
                icon={<Utensils className="h-5 w-5" />}
              >
                Menu Nasi Box
              </LinkButton>
              
              <LinkButton 
                href="https://drive.google.com/file/d/1_66fP1YQcstppfMkElJQK-vP3BX8BjHw/view?usp=sharing"
                icon={<Utensils className="h-5 w-5" />}
              >
                Menu Prasmanan
              </LinkButton>
              
              <LinkButton 
                href="https://alarasa.com"
                icon={<Globe className="h-5 w-5" />}
              >
                Website
              </LinkButton>
              
              
              <LinkButton 
                href="https://alarasa.com/about"
                icon={<Building2 className="h-5 w-5" />}
              >
                Company Profile
              </LinkButton>
              
              <LinkButton 
                href="https://maps.app.goo.gl/xm2ua6oYnhxwWd6T6?g_st=ipc"
                icon={<MapPin className="h-5 w-5" />}
              >
                Lokasi Dapur
              </LinkButton>
              
              <LinkButton 
                href={whatsappUrl}
                className="bg-yellow-500 hover:bg-yellow-600 font-bold text-white py-4 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg animate-bounce"
                icon={<Image src="/whatsapp.png" alt="WhatsApp" width={30} height={30} />}
                onClick={async () => {
                  if (typeof window !== "undefined") {
                    const ReactPixel = (await import("react-facebook-pixel")).default;
                    ReactPixel.track('Lead', {
                      content_name: 'Order disini! Bio Button',
                      content_category: 'Lead',
                      content_type: 'button',
                    });
                  }
                }}
              >
                Order disini!
              </LinkButton>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
