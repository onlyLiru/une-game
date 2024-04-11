import { useTranslations } from "next-intl";
import { useTest } from "@/apiHooks/useTest";

export default function Index() {
  const t = useTranslations("Index");
  const { user, isError, isLoading } = useTest();
  console.log(user, isError, isLoading);

  return (
    <>
      <h1>{t("title")}</h1>
      <div>
        NEXT_PUBLIC_API_URL:{process.env.NEXT_PUBLIC_API_URL}
        <h3>
          NEXT_PUBLIC_VERCEL_CHAINID:{process.env.NEXT_PUBLIC_VERCEL_CHAINID}
        </h3>
        <h3>NEXT_PUBLIC_VERCEL_ENV:{process.env.NEXT_PUBLIC_VERCEL_ENV}</h3>
      </div>
    </>
  );
}
