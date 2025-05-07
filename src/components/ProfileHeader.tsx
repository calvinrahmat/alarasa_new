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

interface ProfileHeaderProps {
  description: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ description }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="w-32 h-32 relative mb-4">
        <Image 
          src="/logo.png"
          alt="Alarasa Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h1 className={`${berenikaBold.className} text-2xl font-bold mb-2`}>alarasa</h1>
      <p className="text-muted-foreground text-center max-w-md">{description}</p>
    </div>
  );
};

export default ProfileHeader;
