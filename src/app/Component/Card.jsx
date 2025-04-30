import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
  
const Cards=()=>{
    return(<>
    <div className="grid grid-cols-1 md:grid-cols-4 ">

 
    <Card className="w-72">
  <CardHeader  className="">
    <img  src="https://media.neimanmarcus.com/f_auto%2Cq_auto%3Alow%2Car_4%3A5%2Cc_fill%2Cdpr_2.0%2Cw_790/01/nm_4790469_100000_b" className="w-full h-64 object-cover rounded-md " alt="" />
    </CardHeader>
    <CardTitle className="text-center">LUCID EDP</CardTitle>
    <CardDescription></CardDescription>

  <CardContent className="text-center">
    <h3>RS:8,399</h3>
  </CardContent>
  <CardFooter className="flex justify-center mt-5">
    <Button> ADD TO Cart<ShoppingCart></ShoppingCart> </Button>
    {/* <p>ADD TO Cart</p> */}
  </CardFooter>
</Card>
    <Card className="w-72">
  <CardHeader  className="">
    <img  src="https://welpix.b-cdn.net/wp-content/uploads/2024/08/The-Concept-of-Hero-Shots-in-E-Commerce-Photography-768x428.webp" className="w-full h-64 object-cover rounded-md " alt="" />
    </CardHeader>
    <CardTitle className="text-center">LUCID EDP</CardTitle>
    <CardDescription></CardDescription>

  <CardContent className="text-center">
    <h3>RS:8,399</h3>
  </CardContent>
  <CardFooter className="flex justify-center mt-5">
    <Button> ADD TO Cart<ShoppingCart></ShoppingCart> </Button>
    {/* <p>ADD TO Cart</p> */}
  </CardFooter>
</Card>
    <Card className="w-72">
  <CardHeader  className="">
    <img  src="https://i5.walmartimages.com/seo/Hero-Green-Cologne-for-Men-100-ml_f071d1ba-0f59-44bc-85bf-b20dfc2d0d74.a912ee137060fcfbe070f9ac92232e6b.jpeg?odnBg=FFFFFF&odnHeight=768&odnWidth=768" className="w-full h-64 object-cover rounded-md " alt="" />
    </CardHeader>
    <CardTitle className="text-center">LUCID EDP</CardTitle>
    <CardDescription></CardDescription>

  <CardContent className="text-center">
    <h3>RS:8,399</h3>
  </CardContent>
  <CardFooter className="flex justify-center mt-5">
    <Button> ADD TO Cart<ShoppingCart></ShoppingCart> </Button>
    {/* <p>ADD TO Cart</p> */}
  </CardFooter>
</Card>
    <Card className="w-72">
  <CardHeader  className="">
    <img  src="https://cdn.fragrancenet.com/images/photos/1600x1600/452683.jpg" className="w-full h-64 object-cover rounded-md " alt="" />
    </CardHeader>
    <CardTitle className="text-center">LUCID EDP</CardTitle>
    <CardDescription></CardDescription>

  <CardContent className="text-center">
    <h3>RS:8,399</h3>
  </CardContent>
  <CardFooter className="flex justify-center mt-5">
    <Button> ADD TO Cart<ShoppingCart></ShoppingCart> </Button>
    {/* <p>ADD TO Cart</p> */}
  </CardFooter>
</Card>
</div>
    </>)
}
export default Cards