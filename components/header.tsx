"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between w-full">
      <div>untitled design</div>
      {theme === "light" ? (
        <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
          <MoonIcon className="h-4 w-4" />
        </Button>
      ) : (
        <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
          <SunIcon className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
