"use client";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MobileNavbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] z-[1000] flex justify-between items-center px-4 bg-white backdrop-blur-10 backdrop-blur-md  text-gray-300 lg:hidden">
      <Link href="/">
        <Image
          src="/assets/must-brand-logo.png"
          alt="Must Brand logo"
          width={200}
          height={76}
          sizes="100vw"
          priority
          quality={100}
          className="object-contain w-fit h-[30px]"
        />
      </Link>

      {/* ====Hamburger===== */}
      {/* {!nav && ( */}
      <div
        onClick={handleClick}
        className="lg:hidden z-10 bg-gray-200 p-2 rounded-lg text-[#29190E]"
      >
        <FaBars size={24} />
      </div>
      {/* )} */}

      {/* ====SideBar  list==== */}
      {/* {nav && <SideBar handleClick={() => handleClick()} />} */}
    </div>
  );
}
