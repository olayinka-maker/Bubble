"use client";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedin = { firsName: "Lummy", lastName: "Olayinka" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedin} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image alt="menu icon" src="/icons/logo.svg" width={30} height={30} />
          <div>
            <MobileNav user={loggedin} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
