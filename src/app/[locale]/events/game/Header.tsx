"use client";

import React, { useEffect } from "react";
import Login from "./LoginModal";
import UserName from "./UserName";
import { Image } from "@chakra-ui/react";
import { useFetchUser } from "@/apiHooks/useFetchUser";
import useUsreInfo from "@/recoil/useUserInfo";

function Header() {
  const { fetchUser, loading } = useFetchUser();
  const { userInfo } = useUsreInfo();
  const isLogin = userInfo && (userInfo as any)?.login_email;

  useEffect(() => {
    fetchUser();
  }, []);
  console.log("userInfo:", userInfo);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex justify-end px-[4rem] py-[2rem]">
        <section className="flex cursor-pointer">
          {loading ? <>loading</> : <>{isLogin ? <UserName /> : <Login />}</>}
          <Image
            className="flex-1"
            src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events%2Fgame%2F20240415-145913.png"
            h="4rem"
            w="auto"
            alt="login"
          />
        </section>
      </header>
    </>
  );
}

export default Header;
