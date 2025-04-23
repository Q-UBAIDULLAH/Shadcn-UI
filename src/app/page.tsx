import { Button } from "@/components/ui/button"
import { DownloadIcon, Icon, TractorIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export default function Home() {
  return (
    <div >
  <Button disabled>Button 1</Button>
  <Button variant="default">Button 2</Button>
  <Button variant="destructive">Button 3</Button>
  <Button variant="link">Button 4</Button>

{/* {Icon} */}

<Button variant="destructive" size="icon">
  <TractorIcon  className="h-4 w-4"></TractorIcon>
</Button>
<Button variant="destructive" className="ml-3" >
  <TrashIcon className=""></TrashIcon>delete
</Button>
<Button disabled>
uploading <DownloadIcon className="animate-bounce"></DownloadIcon>
</Button>

{/* Link */}

<Button variant="default">
<Link href="/login">Login page</Link>
</Button>

{/* Alert */}
<Alert variant="destructive">

  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>you canadd compomenet to your</AlertDescription>
</Alert>
    </div>
  );
}
