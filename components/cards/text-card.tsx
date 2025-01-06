import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function TextCard({
  colourPalette,
}: {
  colourPalette: ColourPalette;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lorem Ipsum</CardTitle>
        <CardDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit soluta
          distinctio eveniet consequuntur fuga dicta sed facilis nihil eos
          dolor! Consequatur, modi sapiente? Impedit corporis esse quas dicta,
          aspernatur velit?
        </div>
      </CardContent>
    </Card>
  );
}
