import { useTranslations } from "next-intl";
import Home from "./HomeContent";
// import { Link } from "@/utils/navigation";
import { Link, Button } from "@chakra-ui/react";

export default function Index() {
  const tIndex = useTranslations("Index");
  const tCommon = useTranslations("Common");

  return (
    <h1>
      {tIndex("title")}
      <p>{tCommon("name")}</p>
      <Button>
        <Link href="/test" color="blue.400" _hover={{ color: "blue.500" }}>
          测试页面
        </Link>
      </Button>
      <Home />
    </h1>
  );
}
