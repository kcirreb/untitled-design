"use client";

import { GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between w-full">
      <div className="font-medium">Untitled Design</div>
      <div className="flex gap-1">
        <Button asChild variant="outline" size="icon">
          <Link
            href={"https://github.com/kcirreb/untitled-design"}
            target="_blank"
          >
            <GitHubLogoIcon className="h-4 w-4" />
          </Link>
        </Button>
        {theme === "light" ? (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme("dark")}
          >
            <SunIcon className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme("light")}
          >
            <MoonIcon className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
