import { SquareActivity, Smartphone } from "lucide-react";
import { GoHome } from "react-icons/go";

export const bottomRouteLinks = [
  {
    name: "소개",
    href: "introduction",
    key: "introduction",
    icon: GoHome,
  },
  {
    name: "소소담담 APP",
    href: "small App",
    key: "small App",
    icon: Smartphone,
  },

  {
    name: "활동",
    href: "activities",
    key: "activities",
    icon: SquareActivity,
  },
];
