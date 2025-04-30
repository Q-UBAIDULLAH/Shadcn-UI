"use client"
import Link from "next/link";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import pic from '../assets/WhatsApp Image 2025-04-29 at 11.02.30 PM.jpeg'
const Navbar=()=>{
    const [open,setopen]=useState(false)
return(<>

<nav className="bg-black p-4">
<div className="flex justify-between">


<button className="text-white md:hidden " onClick={() => setopen(!open)}>

<div className={`w-6 h-0.5 bg-white `}></div>
<div className={`w-5 h-0.5 bg-white my-1`}></div>
<div className={`w-6 h-0.5 bg-white `}></div>
</button> 

<div className=" flex justify-center items-center gap-2 md:flex  md:items-center md:justify-center md:gap-1 ">

<img className="w-7 h-6 rounded-full object-cover" src="data:image/png;base64,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" alt="" />
<h1 className="text-white font-sans">KHAREEDIFY</h1>

</div>

<ul className="hidden md:flex space-x-6">
           <li>
            <a href="/" className="text-white hover:underline">Home</a>
          </li>
           <li>
             <a href="/about" className="text-white hover:underline">About</a>
           </li>
           <li>
             <a href="/services" className="text-white hover:underline">Services</a>
           </li>
           <li>
             <a href="/contact" className="text-white hover:underline">Contact</a>      
          </li>
         </ul>

    {/* <div className="">
        <ul className={`absolute top-16 left-0 w-full bg-gray-400 flex flex-col   space-y-4 pl-3 py-4   md:static  md:flex-row md:space-y-0 md:space-x-6 md:py-0 md:flex  md:gap-6 ${open ? "block":"hidden"} md:block  `}>
            <li><Link href="" className="text-white hover:underline  md:">Cosmetics</Link></li>
            <li><Link href="" className="text-white hover:underline  md:">Fragrance</Link></li>
            <li><Link href="" className="text-white hover:underline  md:">Contact</Link></li>
            <li><Link href="" className="text-white hover:underline  md:">Home Page</Link></li>
            <li><Link href="" className="text-white hover:underline  md:">Login</Link></li>
         </ul>
    </div> */}

     {/* Mobile Sidebar */}

      <div className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform transition-transform duration-300 ease-in-out z-50 ${open ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
      <button
          onClick={() => setopen(false)}
          className="absolute top-0 right-2 text-3xl font-light text-black"
        >
          &times;
        </button>

         <div className="flex flex-col py-12 p-4  space-y-5">
          <a href="/" onClick={() => setopen(false)} className="hover:underline  border-b-[1px]
          pb-3
">Home</a>
          <a href="/" onClick={() => setopen(false)} className="hover:underline  border-b-[1px]
          pb-3
">Perfumes</a>
          <a href="/about" onClick={() => setopen(false)} className="hover:underline border-b-[1px]
          pb-2">About</a>
          <a href="/services" onClick={() => setopen(false)} className="hover:underline border-b-[1px]
          pb-2">Services</a>
           <a href="/contact" onClick={() => setopen(false)} className="hover:underline border-b-[1px]
          pb-2">Contact Us</a>
         </div>
       </div>

<div className="flex space-x-6">

<div><CiSearch fontSize={20}  color="white"/></div>
<div className="hidden md:block"><CiHeart fontSize={20}  color="white"/></div>
<div><LuShoppingBag fontSize={20}  color="white"/></div>


</div>

</div>
{open && (
       <div
           className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
           onClick={() => setopen(false)}
         ></div>
       )}  
    </nav>
</>
)
}
export default Navbar;









// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-blue-600 p-4 relative">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white font-bold text-xl">
//           MyWebsite
//         </div>

//         {/* Hamburger Button */}
//         <button
//           className="flex flex-col justify-center items-center md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span className={`bg-white block transition-all duration-300 h-1 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-2' : '-translate-y-1.5'}`}></span>
//           <span className={`bg-white block transition-all duration-300 h-1 w-6 my-1 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
//           <span className={`bg-white block transition-all duration-300 h-1 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1.5'}`}></span>
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6">
//           <li>
//             <a href="/" className="text-white hover:underline">Home</a>
//           </li>
//           <li>
//             <a href="/about" className="text-white hover:underline">About</a>
//           </li>
//           <li>
//             <a href="/services" className="text-white hover:underline">Services</a>
//           </li>
//           <li>
//             <a href="/contact" className="text-white hover:underline">Contact</a>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Sidebar */}
//       <div className={`fixed top-0 left-0 h-full w-64 bg-blue-700 text-white transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
//         <div className="flex flex-col p-8 space-y-6">
//           <a href="/" onClick={() => setIsOpen(false)} className="hover:underline">Home</a>
//           <a href="/about" onClick={() => setIsOpen(false)} className="hover:underline">About</a>
//           <a href="/services" onClick={() => setIsOpen(false)} className="hover:underline">Services</a>
//           <a href="/contact" onClick={() => setIsOpen(false)} className="hover:underline">Contact</a>
//         </div>
//       </div>

//       {/* Overlay (to darken background when sidebar open) */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//     </nav>
//   );
// }
