"use client";

import Image from "next/image";
import hamburger from "@/images/hamburger-menu.svg";
import logo from "@/images/logo.svg";

export default function Navbar() {
  const handleMenuOpen = () => {
    console.log("Menu opened!");
  };
  return (
    <nav className="flex items-center justify-between px-[20px] md:px-0 pt-[16px] bg-black">
      {/* Desktop Logo (left) */}
      <div className="hidden md:block">
        <Image src={logo} alt="Fame Tonic Logo" width={140} height={40} />
      </div>

      {/* Mobile Logo (centered) */}
      <div className="md:hidden flex-1 flex justify-center">
        <Image src={logo} alt="Fame Tonic Logo" width={120} height={36} />
      </div>

      {/* Desktop Menu (right) */}
      <ul className="hidden md:flex gap-[40px] text-white text-[16px] self-start">
        <li className="cursor-pointer hover:text-[#FF3E86]">About us</li>
        <li className="cursor-pointer hover:text-[#FF3E86]">Contact</li>
      </ul>

      {/* Mobile Hamburger (right) */}
      <button className="md:hidden" onClick={handleMenuOpen}>
        <Image src={hamburger} alt="Hamburger Menu" width={20} height={12} />
      </button>
    </nav>
  );
}
