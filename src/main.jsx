import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main/Main';
import Shop from './component/Shop/Shop';
import Cart from './component/Cart/Cart';
import About from './component/About/About';
import Error from './component/Error/Error';
import Home from './component/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'shop',
        element: <Shop></Shop>,
        loader: ()=> fetch('products.json')
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'about',
        element: <About></About>
      }

    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
