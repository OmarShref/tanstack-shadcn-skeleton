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

export function AtomsPage() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Buttons */}
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
      {/* Alert */}
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

      {/* Accordion */}
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

      {/* Alert Dialog */}
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

      {/* Skeleton */}
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
    </div>
  );
}
