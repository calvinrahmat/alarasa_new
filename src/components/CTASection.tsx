import Link from "next/link";

interface CTAProps {
  description: string;
  primaryCTA: {
    text: string;
    href: string;
    target?: string;
    rel?: string;
  };
}

const CTASection: React.FC<CTAProps> = ({ description, primaryCTA }) => {
  return (
    <div className="p-8 flex flex-col items-center">
      <p className="text-lg text-slate-100 mb-6 text-center max-w-2xl">
        {description}
      </p>
      <div className="mb-6">
        <Link
          href={primaryCTA.href}
          className="animate-bounce inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-800 transition duration-300 w-full sm:w-auto animate-jiggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          {primaryCTA.text}
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
