import createMiddleware from "next-intl/middleware";
import { localesConf } from "@/const";

export default createMiddleware({
  // A list of all locales that are supported
  locales: localesConf,

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames
  // matcher: ["/", "/(zh|en|ja)/:path*"],
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/([\\w-]+)?/users/(.+)"],
};
