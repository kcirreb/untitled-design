"use client";

import { DEFAULT_COLOUR_PALETTE } from "@/lib/constants";
import { createContext, useContext, useState } from "react";

interface ColourPaletteContextType {
  colourPalette: ColourPalette;
  setColourPalette: (palette: ColourPalette) => void;
}

const ColourPaletteContext = createContext<
  ColourPaletteContextType | undefined
>(undefined);

export const ColourPaletteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [colourPalette, setColourPalette] = useState<ColourPalette>(
    DEFAULT_COLOUR_PALETTE
  );

  return (
    <ColourPaletteContext.Provider value={{ colourPalette, setColourPalette }}>
      {children}
    </ColourPaletteContext.Provider>
  );
};

export const useColourPalette = () => {
  const context = useContext(ColourPaletteContext);
  if (context === undefined) {
    throw new Error(
      "useColourPalette must be used within a ColourPaletteProvider"
    );
  }
  return context;
};
