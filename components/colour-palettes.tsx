"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

const defaultColourPalettes: string[] = [
  "#333333",
  "#555555",
  "#777777",
  "#999999",
  "#BBBBBB",
];

export default function ColourPalettes() {
  const [colourPalettes, setColourPalettes] = useState<string[]>(
    defaultColourPalettes
  );
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const rgbToHex = (r: number, g: number, b: number) =>
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");

  const fetchColourPalettes = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("http://colormind.io/api/", {
        method: "POST",
        body: JSON.stringify({ model: "default" }),
      });
      const data = await response.json();

      const colourPalettes: string[] = data.result.map((colour: number[]) => {
        const [r, g, b] = colour;
        return rgbToHex(r, g, b);
      });

      setColourPalettes(colourPalettes);
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
        <div>
          {colourPalettes.map((colour, index) => (
            <Popover key={index}>
              <PopoverTrigger className="w-1/5">
                <div
                  className="h-48 w-full"
                  style={{ backgroundColor: `${colour}` }}
                ></div>
              </PopoverTrigger>
              <PopoverContent>
                <div>{colour}</div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
        <div>
          {isLoading ? (
            <Button disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Generate
            </Button>
          ) : (
            <Button onClick={fetchColourPalettes}>
              <ReloadIcon className="mr-2 h-4 w-4" />
              Generate
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
