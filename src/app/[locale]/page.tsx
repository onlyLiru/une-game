import { useTranslations } from "next-intl";
import Home from "@/pages/home";

export default function Index() {
  const tIndex = useTranslations("Index");
  const tCommon = useTranslations("Common");

  return (
    <h1>
      {tIndex("title")}
      <p>{tCommon("name")}</p>
      <Home />
    </h1>
  );
}
