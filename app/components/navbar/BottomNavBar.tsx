"use client";
import { SquareActivity, Smartphone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { GoHome } from "react-icons/go";

// import { bottomRouteLinks } from "@/utils/sidebarLinks";
// interface RouteLink {
//   name: string;
//   href: string;
//   key: string;
//   icon: React.ElementType;
// }

export default function BottomNavBar() {
  const pathname = usePathname();
  const t = useTranslations("NavBarLinks");
  const iconMap = {
    GoHome: GoHome,
    Smartphone: Smartphone,
    SquareActivity: SquareActivity,
  };
  const keys = ["home", "app", "activities"];
  const handleSmoothScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="fixed bottom-0 left-0 w-full flex items-center justify-between bg-white/50 backdrop-blur-md border-t border-slate-200 px-7 py-3 md:hidden">
      {keys.map((item, index) => {
        const linkHref = t(`${item}.href`);
        const iconName = t(`${item}.name`);
        const icon = t(`${item}.icon`);
        const IconComponent = iconMap[icon as keyof typeof iconMap];
        return (
          <div
            onClick={() => handleSmoothScroll(`${linkHref}`)}
            key={index}
            className={`${
              pathname === linkHref ? "text-[#33A852]" : "#828282"
            } flex flex-col items-center cursor-pointer`}
          >
            {IconComponent && <IconComponent size={24} />}
            <p className="font-normal text-xs leading-6">{iconName}</p>
          </div>
        );
      })}
    </div>
  );
}
