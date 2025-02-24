"use client";
import { useEffect } from "react";
import { getTest } from "@/services/home";
import { useTest, useTestPost } from "@/apiHooks/useTest";
import { useTranslations } from "next-intl";
import RecoilExample from "./RecoilExample";
import Rainbowkit from "./Rainbowkit";
import Wagmi from "./Wagmi";

function Page() {
  const t = useTranslations("Index");
  // const { user, isError, isLoading } = useTest();
  const { user, isError, isLoading } = useTestPost();

  useEffect(() => {
    // const res = getTest();
  }, []);

  return (
    <div>
      <h3>{t("title")}</h3>
      <div>
        NEXT_PUBLIC_API_URL:{process.env.NEXT_PUBLIC_API_URL}
        <h3>
          NEXT_PUBLIC_VERCEL_CHAINID:{process.env.NEXT_PUBLIC_VERCEL_CHAINID}
        </h3>
        <h3>NEXT_PUBLIC_VERCEL_ENV:{process.env.NEXT_PUBLIC_VERCEL_ENV}</h3>
        <RecoilExample />
        <Rainbowkit />
        <Wagmi />
      </div>
    </div>
  );
}

export default Page;
