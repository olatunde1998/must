import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "de", "ko", "ar", "ja", "zh-hans", "fr"],

  // Used when no locale matches
  defaultLocale: "ko",
});
