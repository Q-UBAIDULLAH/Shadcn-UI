import { Button } from "@/components/ui/button"
import { DownloadIcon, Icon, Search, ShoppingCart, TractorIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Navbar from './Component/navbar'
// import Navbar from "./Component/navigationmenu";



export default function Home() {
  return (
    <div >
{/* <Navbar></Navbar> */}
<Navbar></Navbar>
{/* 
  <Button disabled>Button 1</Button>
  <Button variant="default">Button 2</Button>
  <Button variant="destructive">Button 3</Button>
  <Button variant="link">Button 4</Button> */}

{/* {Icon} */}

{/* <Button variant="destructive" size="icon">
  <TractorIcon  className="h-4 w-4"></TractorIcon>
</Button>
<Button variant="destructive" className="ml-3" >
  <TrashIcon className=""></TrashIcon>delete
</Button>
<Button disabled>
uploading <DownloadIcon className="animate-bounce"></DownloadIcon>
</Button>
<Button>
  <ShoppingCart></ShoppingCart>shopping
</Button>
<Search></Search> */}

{/* Link */}

{/* <Button asChild variant="default">
<Link href="/login">Login page</Link>
</Button> */}

{/* Alert */}
{/* <Alert variant="destructive">

  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>you canadd compomenet to your</AlertDescription>
</Alert> */}

{/* CARD */}

{/* <Card className="w-96">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter className="flex justify-end">
    <Button variant="destructive">Card Footer</Button>
  </CardFooter>
</Card> */}

    </div>
  );
}
