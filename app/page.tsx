import AnnouncementBar from "@/Component/AnnouncementBar";
import Footer from "@/Component/Footer";
import HeroSection from "@/Component/HeroSection";
import Navbar from "@/Component/Navbar";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
    </div>
  );
}
