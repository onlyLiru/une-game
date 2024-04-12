import React from "react";
import { useTranslations } from "next-intl";
import Content from "./Content";

function Page() {
  const t = useTranslations("Index");
  return (
    <div>
      <h3>{t("title")}</h3>
      <Content />
    </div>
  );
}

export default Page;
