import React, { useContext,useEffect } from 'react'
import { ProductContext } from '../Context/productcontext'
import { CiCircleRemove } from "react-icons/ci";
import { Link,  useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import emptycard from '/images/empty_cart-512.webp'
import Footer from '../Components/footer';
import '../App.css'

function Cart() {
  const{cart,removecart,invoice,setCart,setinvoice} = useContext(ProductContext)
  const navigate = useNavigate()


  const placeorder = ()=>{
    setCart([])
    setinvoice({count:0,subTotal:0})
    navigate('/sucess')
  }




  return (
    <>
    <Navbar/>
    <div className='flex flex-col  mt-4'>
      {
        cart.length > 0?
        <div className=' flex flex-col p-5 gap-10'>
          {
            cart.map((product)=>{
              return(
                <div key={product.id} className='shadow-md p-4 flex items-center gap-10  justify-center cart-product  '>
                   <img src={product.image} alt={product.name} className='w-[120px] h-[80px] object-contain ' />
                   <div>
                   <div className=' flex flex-col gap-2   w-[450px] p-5 card-product '>
                      <p className='font-bold'>{product.name}</p>
                      <p className='text-xs text-gray-500'>{product.smallDescription}</p>
                      <p className='text-xs'>Qty : {product.quantity}</p>
                      <p className='font-semibold'>${product.price}</p>
                    </div>
                   </div>
                   <CiCircleRemove onClick={()=>removecart(product)} className='text-3xl cursor-pointer text-red-500'/>
                </div>
              )
            })
          }

         <div className='flex flex-col items-end px-10 mt-3 gap-3 py-4'>
            <p className='font-bold'>SubTotal({invoice.count}{invoice.count > 1 ? 'Items':'Item' }):${invoice.subTotal.toFixed(2)}</p>
            <button className='bg-blue-600 text-xs text-white p-2 w-[200px] rounded-md' onClick={placeorder}>Place order</button>
          </div>
          <Footer />

        </div>
        :
        <div className='flex items-center  justify-center p-4 mt-5 gap-5 w-full empty-card'>
          <span>
            <img src={emptycard} alt="" />
          </span>
          {/* <FaShoppingCart  className='text-2xl'/> */}
          <Link className='text-[1rem]  p-2 px-5 rounded-lg bg-blue-500 text-[#fff]  transition duration-500 hover:bg-white hover:text-black' to={'/'}>Add to Products</Link>
        </div>
      }
    </div>
    </>

  )
}

export default Cart