"use client";

import "@rainbow-me/rainbowkit/styles.css";
import React, { ReactNode } from "react";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { Locale } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "Une Meta",
  projectId: "bce5dd8ea9dee79ff0cebd16b68621e1",
  chains: [mainnet, polygon, optimism, arbitrum, base, zora],
  ssr: true,
});

const queryClient = new QueryClient();

export const App = ({
  children,
  locale,
}: {
  children: ReactNode;
  locale: any;
}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider locale={locale}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
