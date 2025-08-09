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
    <section className="bg-black text-white px-[20px] py-[20px] flex flex-col-reverse md:flex-row items-center justify-between">
      {/* Left Side */}
      <div className="flex-1 max-w-[580px] px-[20px]">
        <h1 className="text-[25px] text-center font-[800] leading-[1.2]">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <p className="text-[#00C2FF] text-center font-[800] text-[25px] leading-[100%] tracking-[0] align-middle mb-[22px] text-shadow-fametonic-glow">
          Discover your way to success with Fametonic:
        </p>
        <ul className="text-[#CCCCCC] font-[500] text-[16px] leading-[1.5] mb-[28px] space-y-[8px] max-w-[350px] font-['Figtree']">
          {features.map((item, index) => (
            <li key={index} className="flex items-start">
              <Image
                className="text-[#00C2FF] flex-shrink-0 mt-[2px]"
                src={stars}
                alt="Stars"
                width={22}
                height={22}
              />
              <span className="ml-[11px]">{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-[22px]">
          <Terms />
        </div>
        <div className="">
          <button className="flex justify-center items-center gap-[10px] bg-[#FC004E] w-full py-[8px] rounded-[10px] text-[20px] font-semibold border-0">
            GET STARTED <Image src={arrow} alt="Arrow" width={11} height={6} />
          </button>
          <p className="text-[#FFFFFF] font-figtree font-normal text-[12px] leading-[16px] tracking-[0] text-center align-middle text-[#888888] mt-[8px]">
            1-minute quiz for personalized insights
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex justify-center mt-[40px] md:mt-0">
        <PhoneMockup />
      </div>
    </section>
  );
}
