
import CurvedCarousel from "@/components/3DScroll";
import Hero from "@/components/HeroSection";
import WalletScrollSection from "@/components/WalletScrollSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <CurvedCarousel />
      <WalletScrollSection />
    </main>
  );
}