import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";
import { SWRProvider } from "./SWRProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Une Game",
  description: "Une Game",
};

export default function RootLayout({
  children,
  params: { locale },
  timeZone,
  now,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
  timeZone: any;
  now: any;
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider
          locale={locale}
          timeZone={timeZone}
          now={now}
          messages={messages}
        >
          <SWRProvider>{children}</SWRProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
