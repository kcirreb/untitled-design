"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { CopyIcon, UpdateIcon } from "@radix-ui/react-icons";
import { useToast } from "./ui/use-toast";
import {
  DEFAULT_COLOUR_PALETTE,
  HUEMINT_ADJACENCY_MATRIX,
} from "@/lib/constants";

function hexToHsl(colour: string) {
  const r = parseInt(colour.slice(1, 3), 16) / 255;
  const g = parseInt(colour.slice(3, 5), 16) / 255;
  const b = parseInt(colour.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max != min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h = Math.round(h * 60);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
  }

  return `${h} ${s}% ${l}%`;
}

function mute(colour: string) {
  const [h, s, l] = colour.split(" ");
  const muted = parseInt(l) > 20 ? parseInt(l) - 10 : parseInt(l) + 20;
  return `${h} ${s} ${muted}%`;
}

export default function ColourPalettes() {
  const [colourPalette, setColourPalette] = useState<ColourPalette>(
    DEFAULT_COLOUR_PALETTE
  );
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const { toast } = useToast();

  const fetchColourPalette = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://api.huemint.com/color", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          mode: "transformer",
          num_colors: 4,
          temperature: "1.2",
          num_results: 1,
          adjacency: HUEMINT_ADJACENCY_MATRIX,
        }),
      });
      const data = await response.json();

      const colourPalette: ColourPalette = {
        background: data.results[0].palette[0],
        foreground: data.results[0].palette[1],
        primary: data.results[0].palette[2],
        secondary: data.results[0].palette[3],
      };
      setColourPalette(colourPalette);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const backgroundHsl = hexToHsl(colourPalette.background);
    const foregroundHsl = hexToHsl(colourPalette.foreground);
    const primaryHsl = hexToHsl(colourPalette.primary);
    const secondaryHsl = hexToHsl(colourPalette.secondary);

    const demo = document.getElementById("demo");
    if (demo) {
      demo.style.setProperty("--background", backgroundHsl);
      demo.style.setProperty("--card", backgroundHsl);
      demo.style.setProperty("--card-foreground", foregroundHsl);
      demo.style.setProperty("--primary", primaryHsl);
      demo.style.setProperty("--primary-foreground", backgroundHsl);
      demo.style.setProperty("--muted", mute(backgroundHsl));
      demo.style.setProperty("--muted-foreground", secondaryHsl);
      demo.style.setProperty("--border", secondaryHsl);
      demo.style.setProperty("--input", mute(backgroundHsl));
      demo.style.setProperty("--ring", primaryHsl);
    }
  }, [colourPalette]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Colour Palettes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex">
          {Object.entries(colourPalette).map(([index, colour]) => (
            <div
              key={index}
              className="flex items-center justify-center group w-1/4 aspect-square"
              style={{ backgroundColor: `${colour}` }}
            >
              <Button
                variant="default"
                size="icon"
                className="hidden group-hover:inline-flex"
                onClick={() => {
                  navigator.clipboard.writeText(`${colour}`);
                  toast({
                    description: "Copied colour to clipboard",
                  });
                }}
              >
                <CopyIcon className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {isLoading ? (
          <Button disabled>
            <UpdateIcon className="mr-2 h-4 w-4 animate-spin" />
            Generate
          </Button>
        ) : (
          <Button onClick={fetchColourPalette}>
            <UpdateIcon className="mr-2 h-4 w-4" />
            Generate
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
