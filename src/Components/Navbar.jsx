import React, { useState }  from 'react'
import { Link } from 'react-scroll'
import { GoSearch } from "react-icons/go";
import { PiShoppingBagDuotone } from "react-icons/pi";
import Button from '../Layout/Button';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
 return (
       
        <header className='flex  items-center border-b border-gray-200 bg-white  p-4'>
        <nav className='px-20 md:flex flex-row items-center text-lg font-medium gap-10'>
        <Link
        to="products"
        spy={true}
        smooth={true}
        duration={500}
        className="group relative inline-block cursor-pointer hover:text-primarycolor">
        Products
        </Link>
        <Link
        to="offers"
        spy={true}
        smooth={true}
        duration={500}
        className="group relative inline-block cursor-pointer hover:text-primarycolor">
        Offers
        </Link>
        <Link 
        to="offers"
        spy={true}
        smooth={true}
        duration={500}
        className="group relative inline-block cursor-pointer hover:text-primarycolor">
        Shop
        </Link>
        <Link
         to="offers"
         spy={true}
         smooth={true}
         duration={500}
         className="group relative inline-block cursor-pointer hover:text-primarycolor">
          About
          </Link>
        </nav>
        <div>
        <span className='mx-96'>
          DFTION
        </span>
        </div>
      
        
      <span >
          <GoSearch className='cursor-pointer' size={24}/> 
          </span>
        
        <div>
          <h1 className='text-lg mx-2 cursor-pointer hover:text-primarycolor'>Search</h1>
        </div>
        <div>
        <span>
          <PiShoppingBagDuotone className='cursor-pointer' size={24}/>
          </span>
        </div>
       <div className='mx-1'>
          <h1 className='text-lg cursor-pointer hover:text-primarycolor'>
            Card
          </h1>
        </div>
        <div className='mx-8 hidden lg:flex'> 
          <Button title='Login'/>
        </div>
        

      
      
      </header>
       
)
}

export default Navbar