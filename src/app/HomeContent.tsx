"use client";
import { useTest } from "@/apiHooks/useTest";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

function Home() {
  const t = useTranslations("Index");
  const { user, isError, isLoading } = useTest();

  const router = useRouter();
  console.log(router);

  console.log(user, isError, isLoading);

  return (
    <div>
      Home ttt {t("title")}{" "}
      <button
        onClick={() => {
          router.push("/example");
        }}
      >
        go to example
      </button>
    </div>
  );
}

export default Home;
