"use client";

import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

function RecoilProvider({ children }: { children: ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilProvider;
