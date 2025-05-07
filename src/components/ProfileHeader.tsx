import Image from "next/image";
import localFont from "next/font/local";

const berenikaBold = localFont({
  src: [
    {
      path: "../../public/fonts/Berenika-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-berenika",
});

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 relative">
        <Image 
          src="/logo.png"
          alt="Alarasa Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h1 className={`${berenikaBold.className} text-2xl font-bold mb-2`}>alarasa</h1>
      <p className="text-muted-foreground text-center max-w-md" dangerouslySetInnerHTML={{ __html: `Percayakan Alarasa Catering untuk melengkapi setiap acara special kalian!<br />Enak, higienis dan terjangkau!` }} />
    </div>
  );
};

export default ProfileHeader;
