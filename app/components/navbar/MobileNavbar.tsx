"use client";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import BrandLogo from "@/public/assets/must-brand-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function MobileNavbar() {
  return (
    <div className="fixed w-full h-[80px] z-[1000] flex justify-between items-center px-4 bg-white backdrop-blur-10 backdrop-blur-md  text-gray-300 lg:hidden">
      <Link href="/">
        <Image
          src={BrandLogo}
          alt="Must Brand logo"
          width={200}
          height={76}
          sizes="100vw"
          priority
          quality={100}
          className="object-contain w-fit h-[30px]"
        />
      </Link>
      <div className="bg-[#ffffff] h-fit md:hidden text-[#212121]">
        <LanguageSwitcher />
      </div>
    </div>
  );
}
