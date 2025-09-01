import { Loader } from "lucide-react";
import { Button } from "../atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../atoms/card";

export function AtomsPage() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Variants</CardDescription>
          <div className="grid grid-cols-3 gap-2">
            <Button>default</Button>
            <Button variant={"secondary"}>secondary</Button>
            <Button variant={"outline"}>outline</Button>
            <Button variant={"ghost"}>ghost</Button>
            <Button variant={"link"}>link</Button>
            <Button variant={"destructive"}>destructive</Button>
          </div>

          <CardDescription>Sizes</CardDescription>
          <div className="grid grid-cols-4 gap-2">
            <Button size={"icon"}>icon</Button>
            <Button size={"sm"}>small</Button>
            <Button>default</Button>
            <Button size={"lg"}>large</Button>
          </div>

          <CardDescription>loading</CardDescription>
          <div className="grid grid-cols-3 gap-2">
            <Button loading>button</Button>
            <Button loading spinnerPosition="end">
              button
            </Button>
            <Button loading spinnerPosition="center">
              button
            </Button>
            <Button loading loadingText="loading text">
              button
            </Button>
            <Button
              loading
              spinner={<Loader className="animate-spin" />}
              className="col-span-2"
            >
              custome spinner
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
