"use client";
import unitedKingdom from "@/public/assets/flags/united-kingdom-flag.png";
import saudiArabia from "@/public/assets/flags/saudi-arabia-flag.png";
import { useState, useEffect, useRef, useTransition } from "react";
import germany from "@/public/assets/flags/germany-flag.png";
import france from "@/public/assets/flags/france-flag.png";
import china from "@/public/assets/flags/china-flag.png";
import japan from "@/public/assets/flags/japan-flag.png";
import korea from "@/public/assets/flags/korea-flag.png";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";

const locales = [
  { name: "Korean", value: "ko", label: "KOR", flag: korea },
  { name: "English", value: "en", label: "ENG", flag: unitedKingdom },
  { name: "Chinese", value: "zh-hans", label: "CHN", flag: china },
  { name: "Deutsch", value: "de", label: "DE", flag: germany },
  { name: "Arabic", value: "ar", label: "AR", flag: saudiArabia },
  { name: "Japanese", value: "ja", label: "JP", flag: japan },
  { name: "Français", value: "fr", label: "FR", flag: france },
];

export default function LanguageSwitcher() {
  const startTransition = useTransition()[1];
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      const pathWithoutLocale = pathname.replace(`/${localActive}`, "");
      router.replace(`/${nextLocale}${pathWithoutLocale}`);
      router.refresh();
    });
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Close dropdown if a click occurs outside of it
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="border-[1.3px] border-slate-200 bg-[#4C4C4C] text-[#ffffff] rounded-3xl py-1.5 px-2.5 ml-3 w-[90px] flex items-center justify-between"
      >
        <span className="flex items-center gap-4">
          <span className="text-sm">
            {locales.find((locale) => locale.value === localActive)?.label}
          </span>
        </span>
        <ChevronDown
          size={24}
          className={` transform ${showDropdown ? "rotate-180" : ""}`}
        />
      </button>

      {showDropdown && (
        <ul className="absolute z-10 -left-12 top-12 bg-white border border-slate-200 max-h-52 overflow-y-auto rounded-lg mt-1 w-[160px] shadow-lg">
          {locales.map((locale) => (
            <li
              key={locale.value}
              onClick={() => {
                onSelectChange(locale.value);
                setShowDropdown(false);
              }}
              className={`flex items-center px-4 py-2 cursor-pointer hover:bg-slate-100 ${
                localActive === locale.value ? "bg-slate-200" : ""
              }`}
            >
              <Image
                src={locale.flag}
                width={24}
                height={24}
                alt={`${locale.label}'s flag`}
              />
              <span className="ml-2">{locale.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
