"use client";

import React from "react";
import Login from "./LoginModal";
import Setting from "./Setting";

function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex justify-end px-[4rem] py-[2rem]">
        <section className="flex cursor-pointer">
          <Login />
          <Setting />
        </section>
      </header>
    </>
  );
}

export default Header;
