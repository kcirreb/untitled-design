"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

const defaultColourPalettes: string[] = [
  "#BBBBBB",
  "#999999",
  "#777777",
  "#555555",
  "#333333",
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
        body: JSON.stringify({ model: "ui" }),
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
        <div className="flex">
          {colourPalettes.map((colour, index) => (
            <Popover key={index}>
              <PopoverTrigger className="w-1/5 aspect-square">
                <div
                  className="h-full w-full"
                  style={{ backgroundColor: `${colour}` }}
                ></div>
              </PopoverTrigger>
              <PopoverContent>
                <div>{colour}</div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </CardContent>
      <CardFooter>
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
      </CardFooter>
    </Card>
  );
}
