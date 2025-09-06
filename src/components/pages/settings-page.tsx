import { themes, useTheme, type ThemeName } from "@/lib/theme-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../atoms/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../atoms/select";

export default function SettingsPage() {
  const { themeName, setThemeName } = useTheme();

  return (
    <div className="grid grid-cols-12 gap-6">
      <Card className="col-span-12">
        <CardHeader>
          <CardTitle>Customize Your Theme</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>select predefiend theme</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Select
              value={themeName}
              onValueChange={(v) => setThemeName(v as ThemeName)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Themes</SelectLabel>
                  {Object.keys(themes).map((k) => (
                    <SelectItem key={k} value={k}>
                      {k[0].toUpperCase() + k.slice(1)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
