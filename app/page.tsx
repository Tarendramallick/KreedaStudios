
import CurvedCarousel from "@/components/3DScroll";
import FloatingTitle from "@/components/Gallery";
import GameDashboard from "@/components/GameDashboard";
import Header from "@/components/Header";
import Hero from "@/components/HeroSection";
import WalletScrollSection from "@/components/WalletScrollSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FloatingTitle />
      <CurvedCarousel />
      <GameDashboard />
    </main>
  );
}