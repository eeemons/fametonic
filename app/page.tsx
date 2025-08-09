import AnnouncementBar from "@/Component/AnnouncementBar";
import HeroSection from "@/Component/HeroSection";
import Navbar from "@/Component/Navbar";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <AnnouncementBar />
      <div className="md:px-[215px] lg:max-w-[1440px] mx-auto">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
