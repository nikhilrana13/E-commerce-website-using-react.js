
import { Outlet, useParams } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import { ProductContext } from './Context/productcontext'
import { useEffect,useContext } from 'react'
import { products_categories } from './data/productdata'
import { NavLink } from 'react-router-dom'
import Footer from './Components/footer'


function App() {
  const {filterproducts} = useContext(ProductContext)
  const {category} = useParams();


//  const isActive = (element) =>{
//   return element?.isActive ? 'text-blue-600' : '' 
//  }
     

 useEffect(()=>{
  filterproducts(category)
 },[category])


  return (
    <>
       <div className=' min-h-screen  h-auto'>
        <Navbar />
        
        <Slider />
      <div className='w-[80%] m-auto my-4 bg-white-100 items-center flex flex-col gap-5   p-4'>
        <NavLink to='/'className='text-[3rem] font-bold text-center  p-4 prohead'>Products</NavLink>
        <div className='categories flex flex-col '>
          <ul className='flex items-center justify-center gap-10 p-8 category '>
            {
              products_categories.map((category)=>{
                return(
                  <li key={category.value}>
                            <NavLink to={`/${category.value}`} className={({isActive}) => `${isActive ? 'bg-black text-white' : ' '}  text-[1.2rem] font-[500] p-3  px-5 rounded-full `} >
                                {category.label}
                            </NavLink>
                        </li>
                )
              })
            }
          </ul>
        </div>
        <Outlet />

      
      </div>
      
       <Footer />
      
    </div>
    </>
  )
}

export default App


