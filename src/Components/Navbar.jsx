import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { RiShoppingBagLine } from "react-icons/ri";


const Navbar = () => {
  let Links =[
    {name:"Products",link:"/"},
    {name:"Offer",link:"/"},
    {name:"Shop",link:"/"},
    {name:"About",link:"/"},
];
let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex text-center items-center justify-between  bg-white py-3 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]'>
      DFTION
      </div>
      <div onClick={()=>setOpen(!open)} 
      className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <IoMdMenu name={open ? 'close':'menu'}/>
      
      </div>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transistion-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'} `}>
        {
          Links.map((Link)=>(
            <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={Link.link} className='text-brightcolor hover:text-primarycolor duration-500'>{Link.name}</a>
            </li>
          ))
        }
         <span className='mx-12' >
          <GoSearch className='cursor-pointer md:ml-12 hover:text-primarycolor' size={24}/> 
           </span>
           <span>
           <RiShoppingBagLine className='cursor-pointer hover:text-primarycolor' size={24}/>
           </span>

      </ul>
       
      </div>
    </div>
  )
}

export default Navbar
