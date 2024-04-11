import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");

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
