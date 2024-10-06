
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './pages/product'
import {ProductContextProvider} from './Context/productcontext.jsx'
import Cart from './pages/Cart'
import Success from './pages/Sucess'
import { Auth0Provider } from '@auth0/auth0-react'




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

  <Auth0Provider
    domain="dev-7417zaawdpipcl3o.us.auth0.com"
    clientId="ml09YffbV3mJnkcF149N3MHzQSmBIDQC"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  
  <ProductContextProvider>
    <RouterProvider router={router} />
  </ProductContextProvider>

  </Auth0Provider>,

)
