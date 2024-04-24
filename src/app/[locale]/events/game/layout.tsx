"use client";
import Header from "./Header";
import useMade from "@/recoil/useMade";
export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { page, setPage } = useMade();

  return (
    <div>
      {page === 3 &&  <Header />}
      {children}
    </div>
  );
}
