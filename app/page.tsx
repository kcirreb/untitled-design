import ColourPalettes from "@/components/colour-palettes";
import FontPairings from "@/components/font-pairings";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-12 gap-10">
      <Header />
      <div>
        <Tabs defaultValue="colourPalettes">
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
      </div>
    </main>
  );
}
