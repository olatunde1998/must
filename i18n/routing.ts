import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ko", "de", "en", "ar", "ja", "zh-hans", "fr"],

  // Used when no locale matches
  defaultLocale: "ko",
});
