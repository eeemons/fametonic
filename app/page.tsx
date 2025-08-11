import AnnouncementBar from "@/Component/AnnouncementBar";
import HeroSection from "@/Component/HeroSection";
import Navbar from "@/Component/Navbar";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <AnnouncementBar />
      <div className="px-0 md:px-[8%] xl:px-[14.9%] lg:max-w-[1440px] mx-auto relative overflow-hidden">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
