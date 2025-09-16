"use client";
import { useMode } from "../contexts/ModeContext";

export default function Footer() {
  const { theme } = useMode();
  return (
    <footer
      className={`py-6 bg-black  mt-12 ${
        theme === "dark" ? "bg-mainBg text-black" : "bg-black text-mainBg"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5">
        <div className="text-sm">Krea AI</div>
        <div className="text-sm">
          curated by <strong>Mobbin</strong>
        </div>
      </div>
    </footer>
  );
}
