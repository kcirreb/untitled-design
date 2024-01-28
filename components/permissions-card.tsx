import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export default function PermissionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">App Permissions</CardTitle>
        <CardDescription>Manage app permissions here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <Label className="flex flex-col gap-1">
            <span>Location</span>
            <span className="font-normal text-muted-foreground">
              Allow app to access your device&apos;s location.
            </span>
          </Label>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <Label className="flex flex-col gap-1">
            <span>Camera</span>
            <span className="font-normal text-muted-foreground">
              Allow app to take pictures and record videos.
            </span>
          </Label>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <Label className="flex flex-col gap-1">
            <span>Microphone</span>
            <span className="font-normal text-muted-foreground">
              Allow app to record audio.
            </span>
          </Label>
          <Switch defaultChecked />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Save settings</Button>
      </CardFooter>
    </Card>
  );
}
