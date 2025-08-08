import PhoneMockup from "./PhoneMockup";

export default function HeroSection() {
  return (
    <section className="bg-black text-white px-[20px] py-[20px] flex flex-col-reverse md:flex-row items-center justify-between">
      {/* Left Side */}

      <div className="flex-1 max-w-[580px]">
        <h1 className="text-[25px] text-center font-[800] leading-[1.2]">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <p className="text-[#00C2FF] text-center font-urbanist font-extrabold text-[25px] leading-[100%] tracking-[0] align-middle mb-[20px] text-shadow-fametonic-glow">
          Discover your way to success with Fametonic:
        </p>
        <ul className="text-[#CCCCCC] text-[16px] leading-[1.5] mb-[28px] space-y-[8px]">
          <li>
            ✨ Start growing your influence right away — no waiting required!
          </li>
          <li>
            ✨ Create viral TikToks and Reels step by step with easy-to-follow
            lessons
          </li>
          <li>✨ Use a Personal AI Worker to boost your content</li>
          <li>
            ✨ Learn from expert-led courses designed for aspiring influencers
          </li>
        </ul>
        <button className="bg-[#FF3E86] px-[30px] py-[14px] rounded-full text-[16px] font-semibold border-0 cursor-pointer hover:bg-[#ff5aa0] transition">
          GET STARTED →
        </button>
        <p className="text-[12px] text-[#888888] mt-[8px]">
          1-minute quiz for personalized insights
        </p>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex justify-center mt-[40px] md:mt-0">
        <PhoneMockup />
      </div>
    </section>
  );
}
