"use client";
import { useTest } from "@/apiHooks/useTest";
import { useTranslations } from "next-intl";
import { useRouter, redirect } from "next/navigation";
import { Button } from "@chakra-ui/react";
import useEnv from "@/hooks/useEnv";

function Home() {
  const t = useTranslations("Index");
  const { user, isError, isLoading } = useTest();
  const { isLocal } = useEnv();

  const router = useRouter();

  console.log(user, isError, isLoading);

  if (!isLocal) {
    redirect("/events/game");
  }

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
