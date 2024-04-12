import React from "react";
import { useTranslations } from "next-intl";

function Page() {
  const t = useTranslations("Index");
  return (
    <div>
      <h3>{t("title")}</h3>
    </div>
  );
}

export default Page;
