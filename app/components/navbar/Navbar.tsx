"use client";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
// import SideBar from "@/app/components/sidebar/Sidebar";

const routes = [
  {
    name: "소개",
    href: "introduction",
  },
  {
    name: "소소담담 APP",
    href: "small App",
  },
  {
    name: "활동",
    href: "activities",
  },
];

export default function Navbar() {
  const router = useRouter();

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
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </>
  );
}
