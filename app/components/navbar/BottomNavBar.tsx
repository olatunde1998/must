"use client";
import { bottomRouteLinks } from "@/utils/sidebarLinks";
import { usePathname } from "next/navigation";
import React from "react";

interface RouteLink {
  name: string;
  href: string;
  key: string;
  icon: React.ElementType;
}

export default function BottomNavBar() {
  const pathname = usePathname();

  const handleSmoothScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="fixed bottom-0 left-0 w-full flex items-center justify-between bg-white/50 backdrop-blur-md border-t border-slate-200 px-7 py-3 md:hidden">
      {bottomRouteLinks.map((item: RouteLink, index) => {
        const Icon = item.icon;
        const linkHref = item.href;
        return (
          <div
            onClick={() => handleSmoothScroll(`${linkHref}`)}
            key={index}
            className={`${
              pathname === linkHref ? "text-[#33A852]" : "#828282"
            } flex flex-col items-center cursor-pointer`}
          >
            <Icon size={24} />
            <p className="font-normal text-xs leading-6">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}
