import React from 'react';
import LinkButton from '@/components/LinkButton';
import ProfileHeader from '@/components/ProfileHeader';
import { Card } from '@/components/ui/card';
import CustomerLogos from '@/components/CustomerLogos';
import Image from 'next/image';

const Index = () => {
  const whatsappUrl = `https://wa.me/6285280730787?text=${encodeURIComponent(
    "Halo Minrasa! Mau tanya-tanya tentang paket catering Alarasa"
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
            <ProfileHeader 
              description="Percayakan Alarasa Catering untuk melengkapi setiap acara special kalian! Enak, higienis dan terjangkau!" 
            />
            <div className="mt-8">
              <CustomerLogos />
            </div>
            <div className="flex flex-col space-y-4 mt-8">
              <LinkButton 
                href="https://drive.google.com/file/d/1Glh5vPUDPv7wIY2OIiSRSuowMx_Xe4oD/view?usp=sharing"
              >
                Menu Nasi Box
              </LinkButton>
              
              <LinkButton 
                href="https://drive.google.com/file/d/1ydDOx7T02ypTom0s_B1OC_602qUDVrLr/view?usp=sharing"
              >
                Menu Prasmanan
              </LinkButton>
              
              <LinkButton href="https://alarasa.com">
                Website
              </LinkButton>
              
              <LinkButton href="https://alarasa.com/about">
                Company Profile
              </LinkButton>
              
              <LinkButton 
                href={whatsappUrl}
                isPrimary={true}
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
