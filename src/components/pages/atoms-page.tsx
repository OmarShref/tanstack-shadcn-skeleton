import {
  AlertCircleIcon,
  Bold,
  Calculator,
  CalendarIcon,
  CheckCircle2Icon,
  ChevronsUpDown,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  CreditCard,
  Italic,
  Loader,
  Settings,
  Smile,
  Underline,
  User,
} from "lucide-react";
import { Button } from "../atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../atoms/card";
import { Skeleton } from "../atoms/skeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../atoms/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../atoms/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "../atoms/alert";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/avatar";
import { Badge } from "../atoms/badge";
import { AppBreadcrumb } from "../molecules/app-breadcrumb";
import { Calendar } from "../atoms/calendar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../atoms/carousel";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../atoms/chart";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";
import { Checkbox } from "../atoms/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../atoms/collapsible";
import { Fragment, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../atoms/command";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../atoms/context-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../atoms/dialog";
import { Label } from "../atoms/label";
import { Input } from "../atoms/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../atoms/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../atoms/hover-card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../atoms/input-otp";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../atoms/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../atoms/navigation-menu";
import { Link } from "@tanstack/react-router";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../atoms/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "../atoms/popover";
import { Progress } from "../atoms/progress";
import { RadioGroup, RadioGroupItem } from "../atoms/radio-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../atoms/resizable";
import { ScrollArea } from "../atoms/scroll-area";
import { Separator } from "../atoms/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../atoms/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../atoms/sheet";
import { Slider } from "../atoms/slider";
import { toast } from "sonner";
import { Switch } from "../atoms/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../atoms/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../atoms/tabs";
import { Textarea } from "../atoms/textarea";
import { Toggle } from "../atoms/toggle";
import { ToggleGroup, ToggleGroupItem } from "../atoms/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "../atoms/tooltip";

const chartData = [
  {
    month: "January",
    desktop: 186,
    mobile: 80,
    total: 266,
  },
  {
    month: "February",
    desktop: 305,
    mobile: 200,
    total: 505,
  },
  {
    month: "March",
    desktop: 237,
    mobile: 120,
    total: 357,
  },
  {
    month: "April",
    desktop: 73,
    mobile: 190,
    total: 263,
  },
  {
    month: "May",
    desktop: 209,
    mobile: 130,
    total: 339,
  },
  { month: "June", desktop: 214, mobile: 140, total: 354 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const chartData2 = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];
const chartConfig2 = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function AtomsPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* buttons */}
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
            <Button size={"sm"}>small</Button>
            <Button>default</Button>
            <Button size={"lg"}>large</Button>
            <Button size={"icon"}>icon</Button>
          </div>

          <CardDescription>loading</CardDescription>
          <div className="grid grid-cols-6 gap-2">
            <Button loading className="col-span-2">
              button
            </Button>
            <Button loading spinnerPosition="end" className="col-span-2">
              button
            </Button>
            <Button loading spinnerPosition="center" className="col-span-2">
              button
            </Button>
            <Button loading loadingText="loading text" className="col-span-3">
              button
            </Button>
            <Button
              loading
              spinner={<Loader className="animate-spin" />}
              className="col-span-3"
            >
              custome spinner
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* alert */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Alert</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Alert>
              <CheckCircle2Icon />
              <AlertTitle>Success! Your changes have been saved</AlertTitle>
              <AlertDescription>
                This is an alert with icon, title and description.
              </AlertDescription>
            </Alert>
          </div>

          <CardDescription>Destructive</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Alert variant="destructive">
              <AlertCircleIcon />
              <AlertTitle>Unable to process your payment.</AlertTitle>
              <AlertDescription>
                <p>Please verify your billing information and try again.</p>
                <ul className="list-inside list-disc text-sm">
                  <li>Check your card details</li>
                  <li>Ensure sufficient funds</li>
                  <li>Verify billing address</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* accordion */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Accordion</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Single</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>Item 1</AccordionTrigger>
                <AccordionContent>Item 1 content</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Item 2</AccordionTrigger>
                <AccordionContent>Item 2 content</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <CardDescription>multiple</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger>Item 1</AccordionTrigger>
                <AccordionContent>Item 1 content</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Item 2</AccordionTrigger>
                <AccordionContent>Item 2 content</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CardContent>
      </Card>

      {/* alert dialog */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Alert Dialog</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <AlertDialog>
              <AlertDialogTrigger>
                <Button>Open</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>

      {/* skeleton */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Skeleton</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-3 gap-2">
            <Skeleton className="col-span-2 aspect-[4/1]" />
            <Skeleton className="col-span-1" />
          </div>
        </CardContent>
      </Card>

      {/* avatar */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Avatar</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>

      {/* badge */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Badge</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Variants</CardDescription>
          <div className="grid grid-cols-4 gap-2">
            <Badge>default</Badge>
            <Badge variant={"secondary"}>secondary</Badge>
            <Badge variant={"outline"}>outline</Badge>
            <Badge variant={"destructive"}>destructive</Badge>
          </div>
        </CardContent>
      </Card>

      {/* breadcrumb */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Breadcrumb</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <AppBreadcrumb />
          </div>
        </CardContent>
      </Card>

      {/* calender */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Calender</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Calendar mode="range" captionLayout="dropdown" />
          </div>
        </CardContent>
      </Card>

      {/* checkbox */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Checkbox</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Checkbox />
          </div>
        </CardContent>
      </Card>

      {/* collapseble */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Collapseble</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center justify-between gap-4 px-4">
                <h4 className="text-sm font-semibold">
                  @peduarte starred 3 repositories
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="icon" className="size-8">
                    <ChevronsUpDown />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border px-4 py-2 font-mono text-sm">
                @radix-ui/primitives
              </div>
              <CollapsibleContent className="flex flex-col gap-2">
                <div className="rounded-md border px-4 py-2 font-mono text-sm">
                  @radix-ui/colors
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm">
                  @stitches/react
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </CardContent>
      </Card>

      {/* comand */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Command</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <CalendarIcon />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem disabled>
                    <Calculator />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </CardContent>
      </Card>

      {/* switch */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Switch</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* dialog */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Dialog</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Open Dialog
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when
                      you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="name-1">Name</Label>
                      <Input
                        id="name-1"
                        name="name"
                        defaultValue="Pedro Duarte"
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="username-1">Username</Label>
                      <Input
                        id="username-1"
                        name="username"
                        defaultValue="@peduarte"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* dropdown menu */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Dropdown Menu</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Copy</DropdownMenuItem>
                <DropdownMenuItem>Save</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      {/* TODO: add form here */}

      {/* hover card */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Hover Card</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">Hover here</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/vercel.png" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@nextjs</h4>
                    <p className="text-sm">
                      The React Framework – created and maintained by @vercel.
                    </p>
                    <div className="text-muted-foreground text-xs">
                      Joined December 2021
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </CardContent>
      </Card>

      {/* input otp */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Input OTP</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </CardContent>
      </Card>

      {/* input */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Input</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Input />
          </div>
        </CardContent>
      </Card>

      {/* label */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Label</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Label>Label</Label>
          </div>
        </CardContent>
      </Card>

      {/* menubar */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Menubar</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Menubar className="mx-auto w-fit">
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    New Window <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>New Incognito Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Email link</MenubarItem>
                      <MenubarItem>Messages</MenubarItem>
                      <MenubarItem>Notes</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print... <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Find</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Search the web</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Find...</MenubarItem>
                      <MenubarItem>Find Next</MenubarItem>
                      <MenubarItem>Find Previous</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>Cut</MenubarItem>
                  <MenubarItem>Copy</MenubarItem>
                  <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem>
                    Always Show Bookmarks Bar
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>
                    Always Show Full URLs
                  </MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem inset>
                    Reload <MenubarShortcut>⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled inset>
                    Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Hide Sidebar</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Profiles</MenubarTrigger>
                <MenubarContent>
                  <MenubarRadioGroup value="benoit">
                    <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                    <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                    <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem inset>Edit...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Add Profile...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </CardContent>
      </Card>

      {/* pagination */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Pagination</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>

      {/* popover */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Popover</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="leading-none font-medium">Dimensions</h4>
                    <p className="text-muted-foreground text-sm">
                      Set the dimensions for the layer.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Width</Label>
                      <Input
                        id="width"
                        defaultValue="100%"
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="maxWidth">Max. width</Label>
                      <Input
                        id="maxWidth"
                        defaultValue="300px"
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="height">Height</Label>
                      <Input
                        id="height"
                        defaultValue="25px"
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="maxHeight">Max. height</Label>
                      <Input
                        id="maxHeight"
                        defaultValue="none"
                        className="col-span-2 h-8"
                      />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>

      {/* progress */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Progress</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Progress value={50} />
          </div>
        </CardContent>
      </Card>

      {/* radio group */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Radio Group</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* resizable */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Resizable</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <ResizablePanelGroup
              direction="horizontal"
              className="max-w-md rounded-lg border"
            >
              <ResizablePanel defaultSize={50}>
                <div className="flex h-[200px] items-center justify-center p-6">
                  <span className="font-semibold">One</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel defaultSize={25}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Two</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={75}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Three</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </CardContent>
      </Card>

      {/* scroll area */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Scroll Area</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <ScrollArea className="h-72 w-48 rounded-md border">
              <div className="p-4">
                <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
                {Array.from({ length: 50 })
                  .map((_, i, a) => `v1.2.0-beta.${a.length - i}`)
                  .map((tag) => (
                    <Fragment key={tag}>
                      <div className="text-sm">{tag}</div>
                      <Separator className="my-2" />
                    </Fragment>
                  ))}
              </div>
            </ScrollArea>
          </div>
        </CardContent>
      </Card>

      {/* select */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Select</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* separator */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Separator</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-2 gap-2">
          <CardDescription>horizontal</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Separator />
          </div>

          <CardDescription>vertical</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Separator orientation="vertical" />
          </div>
        </CardContent>
      </Card>

      {/* sheet */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Sheet</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-name">Name</Label>
                    <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-username">Username</Label>
                    <Input id="sheet-demo-username" defaultValue="@peduarte" />
                  </div>
                </div>
                <SheetFooter>
                  <Button type="submit">Save changes</Button>
                  <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </CardContent>
      </Card>

      {/* slider */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Slider</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Slider defaultValue={[50]} />
          </div>
        </CardContent>
      </Card>

      {/* toast */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Toast</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-2">
            <CardDescription>default</CardDescription>
            <div className="grid grid-cols-1 gap-2">
              <Button
                onClick={() =>
                  toast("Event has been created", {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                    action: {
                      label: "Action",
                      onClick: () => console.log("Action"),
                    },
                  })
                }
              >
                Show Toast
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <CardDescription>success</CardDescription>
            <div className="grid grid-cols-1 gap-2">
              <Button
                variant="outline"
                onClick={() =>
                  toast.success("Event has been created", {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                    action: {
                      label: "Action",
                      onClick: () => console.log("Action"),
                    },
                  })
                }
              >
                Show Success Toast
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <CardDescription>info</CardDescription>
            <div className="grid grid-cols-1 gap-2">
              <Button
                variant="secondary"
                onClick={() =>
                  toast.info("Event has been created", {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                    action: {
                      label: "Action",
                      onClick: () => console.log("Action"),
                    },
                  })
                }
              >
                Show info Toast
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <CardDescription>warning</CardDescription>
            <div className="grid grid-cols-1 gap-2">
              <Button
                variant="ghost"
                onClick={() =>
                  toast.warning("Event has been created", {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                    action: {
                      label: "Action",
                      onClick: () => console.log("Action"),
                    },
                  })
                }
              >
                Show warning Toast
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <CardDescription>error</CardDescription>
            <div className="grid grid-cols-1 gap-2">
              <Button
                variant="destructive"
                onClick={() =>
                  toast.error("Event has been created", {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                    action: {
                      label: "Action",
                      onClick: () => console.log("Action"),
                    },
                  })
                }
              >
                Show error Toast
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* context menu */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Context Menu</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-52">
                <ContextMenuItem inset>
                  Back
                  <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset disabled>
                  Forward
                  <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem inset>
                  Reload
                  <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset>
                    More Tools
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-44">
                    <ContextMenuItem>Save Page...</ContextMenuItem>
                    <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                    <ContextMenuItem>Name Window...</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Developer Tools</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem variant="destructive">
                      Delete
                    </ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem checked>
                  Show Bookmarks
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem>
                  Show Full URLs
                </ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuRadioGroup value="pedro">
                  <ContextMenuLabel inset>People</ContextMenuLabel>
                  <ContextMenuRadioItem value="pedro">
                    Pedro Duarte
                  </ContextMenuRadioItem>
                  <ContextMenuRadioItem value="colm">
                    Colm Tuite
                  </ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </CardContent>
      </Card>

      {/* table */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Table</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    invoice: "INV001",
                    paymentStatus: "Paid",
                    totalAmount: "$250.00",
                    paymentMethod: "Credit Card",
                  },
                  {
                    invoice: "INV002",
                    paymentStatus: "Pending",
                    totalAmount: "$150.00",
                    paymentMethod: "PayPal",
                  },
                  {
                    invoice: "INV003",
                    paymentStatus: "Unpaid",
                    totalAmount: "$350.00",
                    paymentMethod: "Bank Transfer",
                  },
                  {
                    invoice: "INV004",
                    paymentStatus: "Paid",
                    totalAmount: "$450.00",
                    paymentMethod: "Credit Card",
                  },
                  {
                    invoice: "INV005",
                    paymentStatus: "Paid",
                    totalAmount: "$550.00",
                    paymentMethod: "PayPal",
                  },
                ].map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">
                      {invoice.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* tabs */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Tabs</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Tabs defaultValue="account">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="api-keys">API Keys</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <p className="text-muted-foreground text-sm">
                  Manage your account here. You can change your password, name,
                  and more.
                </p>
              </TabsContent>
              <TabsContent value="password">
                <p className="text-muted-foreground text-sm">
                  Manage your password here. After your password is updated,
                  you&apos;ll be logged out.
                </p>
              </TabsContent>
              <TabsContent value="api-keys">
                <p className="text-muted-foreground text-sm">
                  Manage your API keys here. You can create new keys, revoke
                  existing keys, and manage your API key permissions.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>

      {/* text area */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Text Area</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Textarea />
          </div>
        </CardContent>
      </Card>

      {/* toggle */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Toggle</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Toggle aria-label="Toggle italic" className="mx-auto w-fit">
              <Bold className="h-4 w-4" />
            </Toggle>
          </div>
        </CardContent>
      </Card>

      {/* toggle group */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Toggle Group</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <ToggleGroup
              type="single"
              className="mx-auto w-fit"
              defaultValue="bold"
            >
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>

      {/* tooltip */}
      <Card className="col-span-12 sm:col-span-6 lg:col-span-4">
        <CardHeader>
          <CardTitle>Tooltip</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Tooltip content</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </CardContent>
      </Card>

      {/* navigation manu */}
      <Card className="z-20 col-span-12 hidden sm:block">
        <CardHeader>
          <CardTitle>Navigation Menu</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-2">
          <CardDescription>Default</CardDescription>
          <div className="grid grid-cols-1 gap-2">
            <NavigationMenu viewport={false} className="mx-auto">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              Beautifully designed components built with
                              Tailwind CSS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {[
                        {
                          title: "Alert Dialog",
                          href: "/docs/primitives/alert-dialog",
                          description:
                            "A modal dialog that interrupts the user with important content and expects a response.",
                        },
                        {
                          title: "Hover Card",
                          href: "/docs/primitives/hover-card",
                          description:
                            "For sighted users to preview content available behind a link.",
                        },
                        {
                          title: "Progress",
                          href: "/docs/primitives/progress",
                          description:
                            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
                        },
                        {
                          title: "Scroll-area",
                          href: "/docs/primitives/scroll-area",
                          description:
                            "Visually or semantically separates content.",
                        },
                        {
                          title: "Tabs",
                          href: "/docs/primitives/tabs",
                          description:
                            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
                        },
                        {
                          title: "Tooltip",
                          href: "/docs/primitives/tooltip",
                          description:
                            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
                        },
                      ].map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link to="/settings">Docs</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>List</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/settings">
                            <div className="font-medium">Components</div>
                            <div className="text-muted-foreground">
                              Browse all components in the library.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/settings">
                            <div className="font-medium">Documentation</div>
                            <div className="text-muted-foreground">
                              Learn how to use the library.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/settings">
                            <div className="font-medium">Blog</div>
                            <div className="text-muted-foreground">
                              Read our latest blog posts.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/settings">Components</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/settings">Documentation</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/settings">Blocks</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/settings"
                            className="flex-row items-center gap-2"
                          >
                            <CircleHelpIcon />
                            Backlog
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/settings"
                            className="flex-row items-center gap-2"
                          >
                            <CircleIcon />
                            To Do
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/settings"
                            className="flex-row items-center gap-2"
                          >
                            <CircleCheckIcon />
                            Done
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </CardContent>
      </Card>

      {/* carousel */}
      <Card className="col-span-12">
        <CardHeader>
          <CardTitle>Carousel</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-2">
            <CardDescription>horizontal arrows out</CardDescription>
            <div>
              <Carousel className="mx-12 h-fit" opts={{ align: "center" }}>
                <CarouselContent className="-ms-10">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/2 ps-10">
                      <Card>
                        <CardContent className="flex aspect-[2/1] items-center justify-center">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <CardDescription>horizontal arrows in</CardDescription>
            <div>
              <Carousel
                opts={{
                  align: "start",
                }}
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <Card>
                        <CardContent className="flex aspect-[2.3/1] items-center justify-center">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="start-4" />
                <CarouselNext className="end-4" />
              </Carousel>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <CardDescription>vertical arrows out</CardDescription>
            <div>
              <Carousel orientation="vertical" className="my-12">
                <CarouselContent className="h-[300px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="h-[300px]">
                      <Card className="h-full">
                        <CardContent className="flex h-full items-center justify-center p-6">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          <div className="grid grid-cols-1 content-center gap-2">
            <CardDescription>vertical arrows out</CardDescription>
            <div>
              <Carousel orientation="vertical">
                <CarouselContent className="h-[350px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/3">
                      <Card className="h-full">
                        <CardContent className="flex h-full items-center justify-center">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="top-4" />
                <CarouselNext className="bottom-4" />
              </Carousel>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* chart */}
      <Card className="col-span-12">
        <CardHeader>
          <CardTitle>Chart</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-2">
            <CardDescription>bar chart</CardDescription>
            <div className="grid grid-cols-1 gap-2">
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <YAxis
                    dataKey="desktop"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    radius={4}
                  />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <CardDescription>line chart</CardDescription>
            <div className="grid grid-cols-1 gap-2">
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <LineChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <YAxis
                    dataKey="desktop"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Line
                    dataKey="desktop"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                  />
                  <Line
                    dataKey="mobile"
                    stroke="var(--color-mobile)"
                    strokeWidth={2}
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <CardDescription>area chart</CardDescription>
            <div className="grid grid-cols-1 gap-2">
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <AreaChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <YAxis
                    dataKey="total"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Area
                    dataKey="desktop"
                    type="natural"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    fill="var(--color-desktop)"
                    stackId="a"
                  />
                  <Area
                    dataKey="mobile"
                    type="natural"
                    stroke="var(--color-mobile)"
                    strokeWidth={2}
                    fill="var(--color-mobile)"
                    stackId="a"
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <CardDescription>pie chart</CardDescription>
            <div className="grid grid-cols-1 gap-2">
              <ChartContainer
                config={chartConfig2}
                className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square h-[400px] w-full pb-0"
              >
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend
                    content={<ChartLegendContent nameKey="browser" />}
                    // className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
                  />
                  <Pie
                    data={chartData2}
                    dataKey="visitors"
                    label
                    nameKey="browser"
                  />
                </PieChart>
              </ChartContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
