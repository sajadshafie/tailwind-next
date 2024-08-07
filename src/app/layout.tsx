"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { context } from "@/context";
import { useEffect, useState } from "react";
import { Header } from "@/components/layout";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, setState] = useState<"Dark" | "Light">("Light");
  useEffect(() => {
    let mode: any = localStorage.getItem("displayMode") as string;

    localStorage.setItem("displayMode", mode);

    setState(mode);
  }, []);

  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={inter.className}>
        <div
          className={`${
            state === "Dark" ? "dark" : ""
          } bg-white dark:bg-gray-700`}
        >
          <context.Provider value={{ state, setState }}>
            <Header />
            {children}
          </context.Provider>
        </div>
      </body>
    </html>
  );
}
