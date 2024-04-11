import { useTranslations } from "next-intl";
import Home from "@/pages/home";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <h1>
      {t("title")}
      <Home />
    </h1>
  );
}
