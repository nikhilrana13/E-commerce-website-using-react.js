import React, { useContext, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../Context/productcontext';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '../App.css'




function Navbar() {
  const {invoice} = useContext(ProductContext)  
const [nav, setNav] = useState(false);



const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Collections' },
    { id: 4, text: 'Contact' },
  ];

  const handleNav = () => {
    setNav(!nav);
  };
  

  return (
  <>
    <div>
    <nav className='bg-white flex justify-between items-center h-24  border w-full p-5 px-10'>
    {/* Logo */}
    <NavLink to='/' className='text-3xl font-bold text-black text-[2.5rem]'>Fashion Hub</NavLink>

    {/* Desktop Navigation */}
    <ul className='hidden md:flex  items-center  p-3 px-8 gap-10 '>
      {navItems.map(item => (
        <li
          key={item.id}
        >
          <NavLink to='/' className={'list-none text-[1.2rem]  p-2 px-[0.85rem] font-[500]  rounded-full hover:bg-black hover:text-white'}>{item.text}</NavLink>
        </li>
      ))}
    </ul>

  
    {/* Mobile Navigation Menu */}
    <ul
      className={
        nav
          ? 'fixed md:hidden left-0 top-0 w-[60%] h-full flex flex-col gap-8 p-3 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 -z-0'
          : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0  left-[-100%] flex flex-col items-center gap-8 p-2 px-4'
      }
    >
      {/* Mobile Logo */}
      
      <h1 className='font-bold text-white text-[2rem] mt-3'>Fashion Hub</h1>
      {/* Mobile Navigation Items */}
      {navItems.map(item => (
        <li
          key={item.id}
        >
              <NavLink to='/' className={'list-none text-[1.2rem] text-[#fff]  p-3 px-[1rem]   font-[500]  rounded-full hover:bg-black hover:text-white'}>{item.text}</NavLink>
          
        </li>
      ))}
    </ul>

    <div className='cart flex items-center '>
                <NavLink to="/cart" className='relative'>
                <FaShoppingCart className='text-[1.5rem]' />
                 {
                    invoice?.count > 0 &&
                    <div className='absolute top-[0.120rem] right-[-0.875rem] w-4 h-4 text-xs bg-blue-700 text-white flex          items-center   justify-center rounded-full'>{invoice?.count}</div>
                   
                 }
                </NavLink>
                
            </div>
            <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </div>

  </nav>
    </div>
   

  </>

  )
}

export default Navbar


