import { useTranslations } from "next-intl";
import Home from "@/pages/home";
import { Link } from "@/utils/navigation";

export default function Index() {
  const tIndex = useTranslations("Index");
  const tCommon = useTranslations("Common");

  return (
    <h1>
      {tIndex("title")}
      <p>{tCommon("name")}</p>
      <Link href="/test" locale="zh">
        测试页面
      </Link>
      <Home />
    </h1>
  );
}
