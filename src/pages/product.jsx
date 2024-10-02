import React, { useContext } from 'react'
import  {ProductContext} from '../Context/productcontext'

function Product() {
    const {products,Addtocart} = useContext(ProductContext)


   
     
  return (
    <div className='flex flex-wrap gap-10  mt-4 justify-center p-5'>
        {
            products.map((product)=>{                
                return(
                    <div key={product.id} className='w-[300px] gap-5  rounded-lg p-4 hover:shadow-lg'>
                    <img src={product.image} alt={product.namer} className='w-[200px] h-[120px] object-contain block m-auto'></img>
                     {/* product info */}
                     <div className='flex flex-col gap-5 my-4  h-[200px] p-2'>
                       <p className='text-center font-bold'>{product.name}</p>
                       <p className='text-center text-sm'>${product.price}</p>
                       <p className='text-[.85rem] text-gray-500  '>{product.smallDescription}</p>
                     </div>
                     <button className='w-full bg-blue-600 text-white text-center text-xs hover:bg-black hover:text-white rounded-full p-3 ' onClick={()=>Addtocart(product)} >+ Add to cart</button>
                  </div>

                )
                  })
        }
    </div>
  )
}

export default Product