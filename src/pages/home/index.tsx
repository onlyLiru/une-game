"use client";

import { useEffect } from "react";
import { getViewInfo } from "@/services/home";
import { useUser } from "@/apiHooks/useUser";

function Home() {
  const { user, isError, isLoading } = useUser(1);

  useEffect(() => {
    const res = getViewInfo();
    console.log(res);
    console.log("env:", process.env.DB_PASS);
  }, []);

  console.log(user, isError, isLoading);

  return <div>Home env:{process.env.DB_PASS}</div>;
}

export default Home;
