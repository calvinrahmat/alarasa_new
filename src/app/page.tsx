import Hero from "@/components/hero-home";
import OurProduct from "@/components/ourProduct";
import ParallaxHighlights from "@/components/parallax-highlights";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <OurProduct />
      <ParallaxHighlights />
    </main>
  );
};

export default Home;
