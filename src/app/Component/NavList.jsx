
import React, { useState } from 'react'
 import { Typography } from '@material-tailwind/react'
 import Link from 'next/link';
function Navlist() {

  const [active ,setactive]=useState(0);
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
     
        onClick={()=>setactive(0)}
        // className={`p-1 font-medium ${active===0?' text-teal-700':'text-black'} hover:text-blue-300`} 
      >
      <Link href={'/'} className=' hover:text-blue-20 text-lg' >Home</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        onClick={setactive(1)}
        className="p-1 font-medium"
      >
        <Link href={'/ebook'} >E-Book</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        onClick={setactive(2)}
        className="p-1 font-medium"
      >
        <Link href={'/contact'} >Contact us</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        onClick={setactive(3)}
        color="blue-gray"
        className="p-1 font-medium"
      >
         <Link href={'/services'} >Service</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        onClick={setactive(4)}
        className="p-1 font-medium"
      >
         <Link href={'/about'} >About</Link>
      </Typography>
    </ul>
  )
}

export default Navlist