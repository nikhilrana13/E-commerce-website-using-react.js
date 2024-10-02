import React, { createContext, useEffect, useState } from 'react'
import { products_data } from '../data/productdata'


const ProductContext = createContext([])





function ProductContextProvider({children}) {
    const [products,setProducts] = useState(products_data)
    const [cart,setCart] = useState([])
    const [invoice,setinvoice] = useState({count:0,subTotal:0});
    const [message,setmessage] = useState('')



    const setInvoicedata = (cart)=>{
        setinvoice(previous =>{
            let newInvoice = {...previous,count:0,subTotal:0};
            cart.forEach((product=>{
                newInvoice.count += product.quantity
                newInvoice.subTotal += product.price * product.quantity
            }))

            return newInvoice
        })

    }


 
         
    const Addtocart = (product) => {
        setmessage(`${product.name} added to the cart`)
        setCart((oldCart) => {
            // console.log('Current Cart:', oldCart);
            const existingProductIndex = oldCart.findIndex((prod) => prod.id === product.id);
            // console.log('Existing Product Index:', existingProductIndex);
            
            let newCart = [...oldCart];
            
            if (existingProductIndex >= 0) {
                newCart[existingProductIndex].quantity += 1;
            } else {
                newCart.push({ ...product, quantity: 1 });
            }
            // console.log('Updated Cart:', newCart);
            setInvoicedata(newCart);
            return newCart; 
        });
    };

    const removecart = (product)=>{
        setmessage(`${product.name} removed from the cart`)
        setCart((oldCart)=>{
            const existingProductIndex = oldCart.findIndex((prod) => prod.id === product.id);
            if(existingProductIndex >= 0){
                const newCart = [...oldCart]
                newCart.splice(existingProductIndex,1)
                setInvoicedata(newCart);
                return newCart

            }
            return oldCart

        })

    }
  
    
    useEffect(()=>{
        const timeout = setTimeout(() => {setmessage('')},600 );
        setInvoicedata(cart)
        return ()=>{
            clearTimeout(timeout)
        }

    },[cart])





   const filterproducts = (category)=>{
    if(category){
        const filteredProduct = products_data.filter(product =>{
          
            if (product.category === category){
                return product
             
            }
        })

        setProducts(filteredProduct)
    } else{
        setProducts(products_data)
    }

   }

 
 

  return (
    <ProductContext.Provider value={{ products,filterproducts,Addtocart,cart,removecart,setinvoice,invoice,setInvoicedata,setCart}}>
        {message && <div className=" fixed rounded-md shadow-lg right-0 top-20 bg-green-600 text-white min-w-[300px] p-2 text-center">{message}</div>}
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext ,ProductContextProvider}





