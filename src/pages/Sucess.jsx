import React from 'react'
import Navbar from '../Components/Navbar';
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import '../App.css'


function Sucess() {
  return (
    <>
    <Navbar/>
     <div className='flex items-center justify-center  w-full mt-40 font-bold gap-10 placed-order '>
    
    <div className='flex items-center gap-3'>
    <IoCheckmarkDoneOutline className='text-green-700 text-3xl'/>
    <h1 className="text-[2rem] font-semibold ">Order Placed Successfully !</h1>

    </div>
     <Link to="/" className=" text-gray-600 text-[1.5rem]">Go to Products</Link>
     <Link to="/cart" className="text-gray-600 text-[1.5rem]">View Cart</Link>
    </div>
    </>
  )
  
   
}

export default Sucess