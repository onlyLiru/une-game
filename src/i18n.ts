import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { localesConf } from "@/const";

// Can be imported from a shared config
const locales = localesConf;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
