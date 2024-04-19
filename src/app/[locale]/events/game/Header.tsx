"use client";

import React, { useEffect } from "react";
import Login from "./LoginModal";
import UserName from "./UserName";
import { Image } from "@chakra-ui/react";
import { useFetchUser } from "@/apiHooks/useFetchUser";
import useUsreInfo from "@/recoil/useUserInfo";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import Link from "next/link";

function Header() {
  const regex = /events\/game\/play$/;
  const pathname = usePathname();
  const { fetchUser, loading } = useFetchUser();
  const { userInfo, isLogin } = useUsreInfo();

  const isPlayPage = regex.test(pathname);

  useEffect(() => {
    fetchUser();
  }, []);

  console.log("userInfo:", userInfo);
  console.log("isLogin", isLogin);

  return (
    <>
      <header
        className={classnames([
          "fixed z-0 top-0 left-0 right-0 flex justify-end md:px-[4rem] px-2 py-[2rem]",
        ])}
        style={{
          top: isPlayPage ? "-19rem" : "0",
        }}
      >
        <section className="flex cursor-pointer">
          {loading ? (
            <Image
              className="flex-1"
              src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events%2Fgame%2F20240416-105831.png"
              h={{ md: "4rem", base: "3rem" }}
              w="auto"
              alt="login"
            />
          ) : (
            <>{isLogin ? <UserName /> : <Login />}</>
          )}
          <Link href="/events/fit">
            <Image
              className="flex-1"
              src="https://unemeta-1322481783.cos.ap-tokyo.myqcloud.com/events%2Fgame%2F20240415-145913.png"
              h={{ md: "4rem", base: "3rem" }}
              w="auto"
              alt="login"
            />
          </Link>
        </section>
      </header>
    </>
  );
}

export default Header;
