"use client";

import SalesCard from "./cards/sales-card";
import PermissionsCard from "./cards/permissions-card";
import SignInCard from "./cards/sign-in-card";
import TextCard from "./cards/text-card";
import TableCard from "./cards/table-card";
import FAQsCard from "./cards/faqs-card";
import { useColourPalette } from "./colour-palette-provider";

export default function Demo() {
  const { colourPalette } = useColourPalette();

  return (
    <div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg border shadow-sm">
      <div className="grid gap-4 xl:grid-cols-2">
        <div className="space-y-4">
          <SalesCard colourPalette={colourPalette} />
          <PermissionsCard colourPalette={colourPalette} />
        </div>
        <div className="space-y-4">
          <SignInCard colourPalette={colourPalette} />
          <FAQsCard colourPalette={colourPalette} />
        </div>
      </div>
      <div className="space-y-4">
        <TextCard colourPalette={colourPalette} />
        <TableCard colourPalette={colourPalette} />
      </div>
    </div>
  );
}
