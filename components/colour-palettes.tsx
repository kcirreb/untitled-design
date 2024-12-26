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

const defaultColourPalettes: string[] = [
  "#BBBBBB",
  "#888888",
  "#555555",
  "#222222",
];

export default function ColourPalettes() {
  const [colourPalettes, setColourPalettes] = useState<string[]>(
    defaultColourPalettes
  );
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const { toast } = useToast();

  const fetchColourPalettes = async () => {
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
          adjacency: [
            "0",
            "35",
            "50",
            "65",
            "35",
            "0",
            "15",
            "30",
            "50",
            "15",
            "0",
            "15",
            "65",
            "30",
            "15",
            "0",
          ],
        }),
      });
      const data = await response.json();

      const colourPalettes: string[] = data.results[0].palette;
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
          <Button onClick={fetchColourPalettes}>
            <UpdateIcon className="mr-2 h-4 w-4" />
            Generate
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
