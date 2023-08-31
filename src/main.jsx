import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider, useNavigate } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Upi from './Components/Payment Pages/Upi.jsx'
import { LeftComponent } from './Components/LeftComponent.jsx'
import Redirect from './Components/Payment Pages/Redirect.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Redirect />
  },
  {
    path:'/card',
    element:<LeftComponent/>
  },
  {
    path:"/upi",
    element:<Upi/>
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>,
)
