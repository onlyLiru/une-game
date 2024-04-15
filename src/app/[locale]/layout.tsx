import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";
import { SWRProvider } from "../SWRProviderCom";
import RecoilProvider from "../RecoilProvider";
import { ChakraProvider } from "@chakra-ui/react";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Une Game",
  description: "Une Game",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <RecoilProvider>
            <ChakraProvider>
              <SWRProvider>{children}</SWRProvider>
            </ChakraProvider>
          </RecoilProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
