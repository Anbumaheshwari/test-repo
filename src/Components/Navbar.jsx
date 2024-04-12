import React, { useState }  from 'react'
import { Link } from 'react-scroll'
import { GoSearch } from "react-icons/go";
import { PiShoppingBagDuotone } from "react-icons/pi";
import Button from '../Layout/Button';

const Navbar = () => {
 

  
 return (
       
        <header className='flex  items-center border-b border-gray-200 bg-white  p-4'>
        <nav className='text-lg font-medium gap-10'>
        <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-primarycolor duration-500">PRODUCTS</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-primarycolor duration-500">OFFER</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-primarycolor duration-500">SHOP</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-primarycolor duration-500">ABOUT</a>
      </li>
      </ul>
        </nav>
        <div>
        <span className='mx-96 text-lg font-bold'>
          DFTION
        </span>
        </div>
      
       <div className='mx-12'>  
      <span >
          <GoSearch className='cursor-pointer hover:text-primarycolor' size={24}/> 
          
          </span>
          </div>
        
        
        <div>
        <span>
          <PiShoppingBagDuotone className='cursor-pointer hover:text-primarycolor ' size={24}/>
          </span>
        </div>
       
          
        
        

      
      
      </header>
       
)
}

export default Navbar
