"use client";

import { useEffect } from "react";
import { getViewInfo } from "@/services/home";
import { useTest } from "@/apiHooks/useTest";

function Home() {
  const { user, isError, isLoading } = useTest();

  useEffect(() => {
    // const res = getViewInfo();
    // console.log(res);
  }, []);

  console.log(user, isError, isLoading);

  return <div>Home</div>;
}

export default Home;
