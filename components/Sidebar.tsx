import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Key } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          className="mb-12 cursor-pointer flex items-center gap-2 "
          href="/"
        >
          <Image
            alt="Horizon Logo"
            src={"/icons/logo.svg"}
            width={34}
            height={34}
            className=" size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo ">Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", {
                "bg-bank-gradient": isActive,
              })}
            >
              <div className="relative  size-6 ">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[3]  invert-0": isActive,
                  })}
                />
              </div>
              <p
                className={cn("sidebar-label  left-48", {
                  "!text-white": isActive,
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
        User
      </nav>
      Footer
    </section>
  );
};

export default Sidebar;