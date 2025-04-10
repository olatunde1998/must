"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import SideBar from "@/app/components/sidebar/Sidebar";

const routes = [
  {
    name: "소개",
    href: "referral",
  },
  {
    name: "소소담담 APP",
    href: "booking",
  },
  {
    name: "활동",
    href: "inbox",
  },
];

export default function Navbar() {
  const [showActions, setShowActions] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  // Refs
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Handle click outside of dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowActions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="hidden lg:block fixed w-full z-20 top-0 left-0 border-b-[0.5px] bg-white py-2.5 backdrop-blur-10 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto p-2 pr-4 md:px-2 lg:px-6 xl:pr-0 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/assets/must-brand-logo.png"
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
              {routes.map((route, index) => (
                <li
                  key={index}
                  className="block py-1 pl-2 pr-3 lg:px-1.5"
                  onClick={() => router.push(`/${route.href}`)}
                >
                  <span className="cursor-pointer uppercase hover:text-[#212121] lg:text-sm">
                    {route.name}
                  </span>
                </li>
              ))}
            </ul>
            <div className="relative hidden md:block">
              <div className="px-3 py-2 text-sm font-normal text-[#FFFFFF] flex items-center gap-4">
                <div
                  onClick={() => setShowActions((prev) => !prev)}
                  className="flex items-center gap-3 cursor-pointer bg-[#4C4C4C] py-1.5 px-2.5 rounded-3xl"
                >
                  KOR
                  <ChevronDown />
                </div>
                {showActions && (
                  <>
                    {/* ====UnAuthenticated Sidebar==== */}
                    <div
                      ref={dropdownRef}
                      className="w-[300px] px-2 shadow-md text-sm border border-[#213f7d0f]  space-y-2 absolute z-[1] -top-[18px] -left-0 lg:-left-30 xl:left-2"
                    >
                      {/* <SideBar handleClick={() => handleClick()} /> */}
                      Hello
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
