"use client";
import Image from "next/image";

import Link from "next/link";
import { useMode } from "../contexts/ModeContext";
import {
  ImageIcon,
  CameraIcon,
  Home,
  SlidersHorizontal,
  PenTool,
  Wand2,
  Folder,
  Headset,
  Moon,
  Sun,
} from "lucide-react";
import UserBtn from "./UserBtn";
import ModeToggle from "./ModeToggle";

const navItems = [
  { type: "icon", name: "Home", icon: Home, href: "/" },
  { type: "icon", name: "Image", icon: ImageIcon, href: "/image" },
  { type: "icon", name: "Video", icon: CameraIcon, href: "/video" },
  { type: "icon", name: "Gallery", icon: SlidersHorizontal, href: "/gallery" },
  { type: "icon", name: "Design", icon: PenTool, href: "/design" },
  { type: "icon", name: "Edit", icon: Wand2, href: "/edit" },
  { type: "icon", name: "Folder", icon: Folder, href: "/files" },
];

export default function Nav() {
  const { theme } = useMode();

  return (
    <nav
      className={`w-full flex flex-col xl:flex-row items-center xl:justify-between px-6 py-3 border-b ${
        theme === "dark" ? "bg-black" : "bg-mainBg"
      }`}
    >
      <div className="xl:w-[4rem] w-full flex items-center justify-between xl:inline-block">
        <Link href="/" className="">
          <span
            className={`text-lg font-bold ${
              theme === "dark" ? "text-mainBg" : "text-black"
            }`}
          >
            Krea
          </span>
        </Link>
        <div className="flex items-center gap-x-2 xl:hidden">
          <ModeToggle />
          <UserBtn />
        </div>
      </div>

      <ul className="flex gap-x-3 xl:gap-x-6 items-center mt-4 xl:mt-0 px-3 py-2 list-none">
        {navItems.map((item, i) => {
          const { icon: Icon, href, name } = item;
          return (
            <li key={i}>
              <Link
                href={href}
                className={`flex items-center gap-2 ${
                  theme === "dark" ? "text-mainBg" : "text-black"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="sr-only">{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="hidden xl:flex items-center gap-x-6">
        <div className="flex items-center gap-x-4">
          <Image src="/image.svg" alt="gallery" width={20} height={20} />
          <span
            className={`${theme === "dark" ? "text-mainBg" : "text-black"}`}
          >
            Gallery
          </span>
        </div>
        <div className="xl:flex items-center gap-x-4">
          <Headset
            className={`${theme === "dark" ? "text-mainBg" : "text-black"}`}
          />
          <span
            className={`${theme === "dark" ? "text-mainBg" : "text-black"}`}
          >
            Support
          </span>
        </div>
        <div className="flex items-center gap-x-4">
          <ModeToggle />
          <UserBtn />
        </div>
      </div>
    </nav>
  );
}
