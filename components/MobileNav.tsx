"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            alt="menu icon"
            width={30}
            height={30}
          />
        </SheetTrigger>
        <SheetContent side="left" className=" border-none bg-white">
          <nav className="flex flex-col gap-4">
            <Link
              className=" cursor-pointer flex items-center gap-1 px-4 "
              href="/"
            >
              <Image
                alt="Horizon Logo"
                src={"/icons/logo.svg"}
                width={34}
                height={34}
              />
              <h1 className=" text-26 font-ibm-plex-serif font-bold text-black-1 ">
                Horizon
              </h1>
            </Link>
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                  {sidebarLinks.map((item) => {
                    const isActive =
                      pathname === item.route ||
                      pathname.startsWith(`${item.route}/`);
                    return (
                      <SheetClose asChild key={item.route}>
                        <Link
                          href={item.route}
                          key={item.label}
                          className={cn("mobilenav-sheet_close w-full", {
                            "bg-bank-gradient": isActive,
                          })}
                        >
                          <div className="relative  size-6 ">
                            <Image
                              src={item.imgURL}
                              alt={item.label}
                              width={20}
                              height={20}
                              className={cn({
                                "brightness-[3]  invert-0": isActive,
                              })}
                            />
                          </div>
                          <p
                            className={cn(
                              "text-16 font-semibold text-black-2",
                              {
                                "text-white": isActive,
                              }
                            )}
                          >
                            {item.label}
                          </p>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </SheetClose>
            </div>
            User
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
