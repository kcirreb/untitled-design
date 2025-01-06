"use client";

import { useState } from "react";
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
import { HUEMINT_ADJACENCY } from "@/lib/constants";
import { useColourPalette } from "./colour-palette-provider";

export default function ColourPalette() {
  const { colourPalette, setColourPalette } = useColourPalette();
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
          adjacency: HUEMINT_ADJACENCY,
        }),
      });
      const data = await response.json();

      const colourPalette: ColourPalette = {
        background: data.results[0].palette[0],
        primary: data.results[0].palette[1],
        secondary: data.results[0].palette[2],
        accent: data.results[0].palette[3],
      };
      setColourPalette(colourPalette);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

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
