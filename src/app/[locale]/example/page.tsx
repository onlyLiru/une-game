import { useTranslations } from "next-intl";
import Content from "./Content";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <>
      <h1>{t("title")}</h1>
      <Content />
    </>
  );
}
