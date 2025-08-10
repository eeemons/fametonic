import Image from "next/image";
import image from "@/images/phone-mockup.png";

export default function PhoneMockup() {
  return (
    <div className="relative max-w-[390px] md:max-w-none md:w-full md:h-full flex items-center justify-center">
      <Image
        src={image}
        alt="Phone mockup"
        width={666}
        height={679}
        priority
        className="block h-auto w-full max-w-[390px] md:max-w-[666px] md:w-[666px] md:h-[679px]"
      />
    </div>
  );
}
