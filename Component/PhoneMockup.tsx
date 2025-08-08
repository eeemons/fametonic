import Image from "next/image";
import image from "@/images/phone-mockup.png";
export default function PhoneMockup() {
  return (
    <div className="relative max-w-[500px]">
      <Image
        src={image}
        alt="Phone mockup"
        width={500}
        height={500}
        priority
        className="block h-auto"
      />
    </div>
  );
}
