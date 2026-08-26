"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

/**
 * Light/dark switch.
 *
 * The initial class is applied by the blocking script in layout.tsx before
 * first paint, so this component only has to read what that script decided
 * and keep it in sync from then on.
 */
export function ThemeToggle({ className }: { className?: string }) {
  // Undefined until mounted: the server has no way to know which theme the
  // visitor's browser resolved, so rendering an icon before hydration would
  // guarantee a mismatch.
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode or blocked storage: the toggle still works for this
      // visit, it just won't be remembered.
    }
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/60 hover:text-foreground",
        className
      )}
      aria-label={
        theme ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"
      }
      title={theme ? `Switch to ${isDark ? "light" : "dark"} mode` : undefined}
    >
      {/* Both icons render; opacity/rotation cross-fade between them. Before
          mount neither is shown, which keeps SSR and client markup identical. */}
      <Sun
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-300",
          theme === "light"
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-50 opacity-0"
        )}
      />
      <Moon
        className={cn(
          "h-[18px] w-[18px] transition-all duration-300",
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-50 opacity-0"
        )}
      />
    </button>
  );
}
