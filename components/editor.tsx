import ColourPalettes from "./colour-palettes";
import FontPairings from "./font-pairings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function Editor() {
  return (
    <Tabs defaultValue="colourPalettes" className="w-full">
      <TabsList className="grid grid-cols-2 w-full">
        <TabsTrigger value="colourPalettes">Colour Palettes</TabsTrigger>
        <TabsTrigger value="fontPairings">Font Pairings</TabsTrigger>
      </TabsList>
      <TabsContent value="colourPalettes">
        <ColourPalettes />
      </TabsContent>
      <TabsContent value="fontPairings">
        <FontPairings />
      </TabsContent>
    </Tabs>
  );
}
