"use client";
import { useTest } from "@/apiHooks/useTest";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "@chakra-ui/react";

function Home() {
  const t = useTranslations("Index");
  const { user, isError, isLoading } = useTest();

  const router = useRouter();

  console.log(user, isError, isLoading);

  return (
    <div>
      Home {t("title")}{" "}
      <Button
        colorScheme="teal"
        size="md"
        onClick={() => {
          router.push("/example");
        }}
      >
        go to example
      </Button>
    </div>
  );
}

export default Home;
