"use client";
import { useEffect } from "react";
import { getTest } from "@/services/home";
import { useTest, useTestPost } from "@/apiHooks/useTest";
import { useTranslations } from "next-intl";
import RecoilExample from "./RecoilExample";

function Page() {
  const t = useTranslations("Index");
  // const { user, isError, isLoading } = useTest();
  // console.log(user, isError, isLoading);
  const { user, isError, isLoading } = useTestPost();
  console.log(user, isError, isLoading);

  useEffect(() => {
    // const res = getTest();
    // console.log(res);
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
      </div>
    </div>
  );
}

export default Page;
