import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { localesConf } from "@/const";

export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: localesConf, localePrefix });
