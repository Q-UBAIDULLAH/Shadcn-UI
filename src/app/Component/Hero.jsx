
import Image from "next/image"
import log from '../assets/WhatsApp Image 2025-04-29 at 11.02.30 PM.jpeg'

import { AspectRatio } from "@/components/ui/aspect-ratio"

const Hero=()=>{

return(<>


<AspectRatio ratio={16 / 6} className=" bg-muted rounded-md overflow-hidden mt-2">
  <img
//src={log}
    src="https://images.augustman.com/wp-content/uploads/sites/2/2022/10/18172157/BURBERRY_BEAUTY_2022_FRAGRANCE_HERO_EDP_STILL_LIFE_JPG_RGB_08_16x9-min-scaled.jpg"
    alt="Example"
    fill
    className="h-full w-full object-cover"
    priority
  />
</AspectRatio>


</>)
}
export default Hero