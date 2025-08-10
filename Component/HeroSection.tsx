import Image from "next/image";
import PhoneMockup from "./PhoneMockup";
import stars from "@/images/stars.png";
import arrow from "@/images/arrow.svg";
import Terms from "./Terms";

export default function HeroSection() {
  const features = [
    {
      text: "Start growing your influence right away — no waiting required!",
    },
    {
      text: "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    },
    {
      text: "Use a Personal AI Worker to boost your content",
    },
    {
      text: "Learn from expert-led courses designed for aspiring influencers",
    },
  ];

  return (
    <section className="bg-black text-white px-[20px] pb-[20px] flex flex-col-reverse md:flex-row md:px-0 relative md:min-h-[679px] md:pb-[40px]">
      {/* Left Side - Content */}
      <div className="flex-1 max-w-[580px] px-[20px] md:px-0 relative z-10 md:mt-[57px]">
        <h1 className="text-[25px] text-center md:text-left font-[800] leading-[1.2] md:text-[35px] md:leading-[1.15]">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <p className="text-[#00E7F9] text-center md:max-w-[516px] md:text-left font-[800] text-[25px] leading-[100%] tracking-[0] align-middle mb-[22px] text-shadow-fametonic-glow md:text-[35px] md:leading-[1.15]">
          Discover your way to success with Fametonic:
        </p>
        <ul className="text-[#CCCCCC] font-[500] text-[16px] leading-[1.5] mb-[28px] space-y-[8px] max-w-[350px] md:max-w-[516px] font-['Figtree']">
          {features.map((item, index) => (
            <li key={index} className="flex items-start">
              <Image
                className="text-[#00C2FF] mt-[2px] flex-shrink-0"
                src={stars}
                alt="Stars"
                width={22}
                height={22}
              />
              <span className="ml-[11px]">{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="md:flex md:flex-col-reverse">
          <div className="mt-[22px] md:mt-[16px]">
            <Terms />
          </div>
          <div className="md:max-w-[313px]">
            <button className="flex justify-center items-center gap-[10px] bg-[#FC004E] w-full py-[8px] rounded-[10px] text-[20px] font-[700] border-0 shadow-fametonic-glow">
              GET STARTED{" "}
              <Image src={arrow} alt="Arrow" width={11} height={6} />
            </button>

            <p className="text-[#FFFFFF] font-figtree font-[400] text-[12px] leading-[16px] tracking-[0] text-center align-middle text-[#888888] mt-[10px]">
              1-minute quiz for personalized insights
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Phone Mockup */}
      <div className="flex-1 flex justify-center md:justify-end relative md:absolute md:right-0 md:top-0 md:w-[50%] lg:w-[45%] md:overflow-visible">
        <PhoneMockup />
      </div>
    </section>
  );
}
