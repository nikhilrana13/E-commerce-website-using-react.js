
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './pages/product'
import {ProductContextProvider} from './Context/productcontext.jsx'
import Cart from './pages/Cart'
import Success from './pages/Sucess'




const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/:category?',
        element: <Product />
      },
    ]
  },
  {
    path: '/cart',
    element: <Cart />
  },{
    path: '/sucess',
    element: <Success />
  }
])



const root = createRoot(document.getElementById('root'))

root.render(
  <ProductContextProvider>
    <RouterProvider router={router} />
  </ProductContextProvider>
)
