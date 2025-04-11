import { SquareActivity, Smartphone } from "lucide-react";
import { GoHome } from "react-icons/go";

export const bottomRouteLinks = [
  {
    key: "introduction",
    name: "소개",
    href: "introduction",
    icon: GoHome,
  },
  {
    key: "small App",
    name: "소소담담 APP",
    href: "small App",
    icon: Smartphone,
  },

  {
    key: "activities",
    name: "활동",
    href: "activities",
    icon: SquareActivity,
  },
];
