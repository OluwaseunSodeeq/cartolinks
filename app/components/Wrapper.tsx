"use client";
import { ReactNode } from "react";
import { useMode } from "../contexts/ModeContext";

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  const { theme } = useMode();
  return (
    <section
      className={`w-full ${theme === "dark" ? "bg-black" : "bg-mainBg"}`}
    >
      <section className="w-full 2xl:max-w-[1400px] mx-auto px-[3.5rem]">
        {children}
      </section>
    </section>
  );
}
