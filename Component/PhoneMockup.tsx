import Image from "next/image";
import image from "@/images/phone-mockup.png";
export default function PhoneMockup() {
  return (
    <div className="relative max-w-[390px] md:max-w-[666px]">
      <Image
        src={image}
        alt="Phone mockup"
        width={666}
        height={500}
        priority
        className="block h-auto"
      />
    </div>
  );
}
