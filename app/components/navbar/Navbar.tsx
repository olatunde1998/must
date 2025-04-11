"use client";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import BrandLogo from "@/public/assets/must-brand-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";



export default function Navbar() {
  const t = useTranslations("NavBarLinks");
  const keys = ["home", "app", "activities"];

  const handleSmoothScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <nav className="hidden lg:block fixed w-full z-20 top-0 left-0 border-b-[0.5px] bg-white py-2.5 backdrop-blur-10 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto p-2 pr-4 md:px-2 lg:px-6 xl:pr-0 flex justify-between items-center">
          <Link href="/">
            <Image
              src={BrandLogo}
              alt="Must Brand logo"
              width={200}
              height={76}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-fit h-[40px]"
            />
          </Link>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto">
            <ul className="p-2 md:p-0 mt-2 font-medium rounded-lg md:space-x-4 md:mt-0 md:border-0 hidden md:flex flex-row">
              {keys.map((item, index) => {
                const linkHref = t(`${item}.href`);
                const iconName = t(`${item}.name`);
                return (
                  <li
                    key={index}
                    className="block py-1 pl-2 pr-3 lg:px-1.5"
                    onClick={() => handleSmoothScroll(`${linkHref}`)}
                  >
                    <span
                      className={`${
                        index === 0 && "text-[#8C5947]"
                      } cursor-pointer uppercase hover:text-[#212121] lg:text-sm`}
                    >
                      {iconName}
                    </span>
                  </li>
                );
              })}
            </ul>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </>
  );
}
