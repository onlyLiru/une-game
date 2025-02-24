"use client";

import { ReactNode } from "react";
import { SWRConfig } from "swr";
export const SWRProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
      }}
    >
      {children}
    </SWRConfig>
  );
};
