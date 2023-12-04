import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

import "@/style/globals.css";

import { dark } from "@/CONSTANTS";

import AsideBar from "@/components/AsideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bilsida - Dealership",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dark ? "dark" : ""}>
      <body className={`${inter.className} overflow-hidden`}>
        <Toaster />

        <NextTopLoader color="#ef4444" height={2.5} showSpinner={false} />

        <div className="h-screen flex">
          <AsideBar />

          <main className="bg-sky-50/50 dark:bg-gray-900 w-full overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
