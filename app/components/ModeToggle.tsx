"use client";
import React from "react";
import { useMode } from "../contexts/ModeContext";
import { Moon, Sun } from "lucide-react";

export default function ModeToggle() {
  const { toggleTheme, theme } = useMode();
  return (
    <div className="flex items-center gap-x-4">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-full cursor-pointer ${
          theme === "dark" ? "bg-lightGreen" : "bg-navbarBg"
        }`}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-yellow" />
        ) : (
          <Moon className="w-5 h-5 text-darkGreen" />
        )}
      </button>
    </div>
  );
}
