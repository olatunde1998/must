"use client";
import unitedKingdom from "@/public/assets/flags/united-kingdom-flag.png";
import saudiArabia from "@/public/assets/flags/saudi-arabia-flag.png";
import { useState, useEffect, useRef } from "react";
import germany from "@/public/assets/flags/germany-flag.png";
import france from "@/public/assets/flags/france-flag.png";
import china from "@/public/assets/flags/china-flag.png";
import { useRouter } from "next/navigation";
import japan from "@/public/assets/flags/japan-flag.png";
import korea from "@/public/assets/flags/korea-flag.png";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
// import { useLocale } from "next-intl";

const locales = [
  { value: "ko", label: "Korean", flag: korea },
  { value: "en", label: "English", flag: unitedKingdom },
  { value: "zh-hans", label: "Chinese", flag: china },
  { value: "de", label: "Deutsch", flag: germany },
  { value: "ar", label: "Arabic", flag: saudiArabia },
  { value: "ja", label: "Japanese", flag: japan },
  { value: "fr", label: "Français", flag: france },
];

export default function LanguageSwitcher() {
  // const [startTransition] = useTransition();
  // const router = useRouter();
  //   const localActive = useLocale();
  //   const pathname = usePathname();
  //   const selectedLocale = locales.find((locale) => locale.value === localActive);

  // const onSelectChange = (nextLocale: any) => {
  //   // startTransition(() => {
  //     //   const pathWithoutLocale = pathname.replace(`/${localActive}`, "");
  //     //   router.replace(`/${nextLocale}${pathWithoutLocale}`);
  //     router.refresh();
  //   // });
  // };
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
          {/* {selectedLocale?.flag && (
            <Image
              src={selectedLocale.flag}
              alt={`${selectedLocale.label} flag`}
              width={20}
              height={20}
            />
          )} */}
          <span className="text-sm">
            {/* {locales.find((locale) => locale.value === localActive)?.label} */}
            KOR
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
                // onSelectChange(locale.value);
                setShowDropdown(false);
              }}
              //   className={`flex items-center px-4 py-2 cursor-pointer hover:bg-slate-100 ${
              //     localActive === locale.value ? "bg-slate-200" : ""
              //   }`}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-slate-100"
            >
              <Image
                src={locale.flag}
                width={24}
                height={24}
                alt={`${locale.label}'s flag`}
              />
              <span className="ml-2">{locale.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
