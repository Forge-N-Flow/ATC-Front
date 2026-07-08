import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // French only for now — add "en" here (plus src/messages/en.json) to enable English.
  locales: ["fr"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
});
