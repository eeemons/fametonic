export default function AnnouncementBar() {
  return (
    <div className="fametonic-gradiant font-figtree py-[20px] md:flex md:justify-center lg:py-[10px] lg:px-[0px]">
      <p className="text-[#00E7F9] text-center font-extrabold md:text-[18px] lg:text-[22px]">
        🚀 FRESH BEGINNINGS SALE:
        <span className="!text-white !font-semibold text-[14px] md:text-[18px] lg:text-[22px]">
          {" "}
          Extra 25% OFF,
        </span>
      </p>

      <p className="text-center text-[14px] md:text-[18px] lg:text-[22px] font-semibold">
        Limited Spots – start your journey today!
      </p>
    </div>
  );
}
