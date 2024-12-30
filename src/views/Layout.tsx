import React from "react";
import Header from "../components/header/Header";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen text-black dark:text-white-bg dark:bg-black">
      <Header />
      <main className="flex-grow relative pt-[4.5rem]">
        <div className="max-w-[100%] mx-auto ">{children}</div>
      </main>
    </div>
  );
}
