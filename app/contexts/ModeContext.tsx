"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ModeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ModeContext = createContext<ModeContextProps | undefined>(undefined);

interface ModeProviderProps {
  children: ReactNode;
}

export function ModeProvider({ children }: ModeProviderProps) {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Initialize theme after hydration
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) {
      setTheme(saved);
    } else {
      const hour = new Date().getHours();
      setTheme(hour >= 18 || hour < 6 ? "dark" : "light");
    }
  }, []);

  // Sync <html> class and save preference
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Avoid rendering until theme is ready to prevent hydration errors
  if (!theme) return null;

  return (
    <ModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode(): ModeContextProps {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
}
