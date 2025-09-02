import { AlertCircleIcon, CheckCircle2Icon, Loader } from "lucide-react";
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

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
].map((d) => ({ ...d, total: d.desktop + d.mobile }));

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function AtomsPage() {
  return (
    <div className="grid grid-cols-12 gap-4">
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
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <PieChart accessibilityLayer data={chartData}>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Pie
                    dataKey="desktop"
                    data={chartData}
                    fill="var(--color-desktop)"
                  />
                  <Pie
                    dataKey="mobile"
                    data={chartData}
                    fill="var(--color-mobile)"
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
