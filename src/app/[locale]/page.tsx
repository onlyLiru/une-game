import { useTranslations } from "next-intl";
import Home from "@/pages/home";

export default function Index() {
  const t = useTranslations("Index");
  console.log(process.env.DB_PASS)

  return (
    <h1>
      {t("title")}
      <Home />
    </h1>
  );
}
