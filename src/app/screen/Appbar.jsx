'use client';
import React from 'react'
import Image from 'next/image'
import NavList from '../Component/Navlist';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter  } from 'next/navigation';
import Link from 'next/link';

 const  Appbar=()=> {

    const router=useRouter()
    const [openNav, setOpenNav] = React.useState(false);
    const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
    },
    []);

  return (
    <>

    <Navbar className="  bg-opacity-20 w-full text-black  py-4  px-5 shadow">

    <div className="container  mx-auto items-center ">

      <div className="flex justify-between items-center ">
   
        <div className=  " hover:text-blue flex items-center space-x-2 text-xl font-bold">
        <Image
        src="/logo.png" 
        alt="My Image"
        width={60} 
        height={60} 
      />
    <p>ማህበረ ቅዱሳን </p>
        </div>
  
          <div className="hidden lg:block">
          <NavList/>
          
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
        <div className=' hidden   space-x-2  lg:flex '   >
        <Link href={'/login'}>Login</Link>
        <div className=' w-[1px] h bg-slate-500' ></div>
        <Link href={'/register'}>Register</Link>

      </div>
      </div><div></div></div>

    <Collapse className=' transition-all duration-75' open={openNav}>
     <div className={`${openNav?'block ':'hidden '} pt-10 pb-5 lg:hidden transition-all duration-3000 flex justify-between `}>
   <NavList/>
   <div className=' pt-4 flex flex-col   lg:flex space-y-2 '   >
        <Link href={'/login'}  className=' text-center bg-black text-white rounded py-2 px-6'>Login</Link>
       
        <Link href={'/register'} className=' text-center text-black rounded border border-black py-2 px-6'>Register</Link>

      </div>
     </div>
      </Collapse>
  </Navbar>
 
  </>
  );
}

export default Appbar