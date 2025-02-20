import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'

import Feature from './Components/Feature.jsx'
import Hero from './Components/Hero.jsx'
import Blog from './Components/Blog.jsx'
import Team from './Components/Team.jsx'
import Contact from './Components/Contact.jsx'
import Menu from './Components/Menu.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import ErrorPage from './Components/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage/>, 
    children: [
      { index: true, element: <Hero /> },
      {
        path:"",
        element:<Hero />
      },
      {
        path:"team",
        element:<Team />
      },
      {
        path:"feature",
        element:<Feature />
      },
      {
        path:"blog",
        element:<Blog />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"menu",
        element:<Menu />
      },
      {
        path:"login",
        element:<Login />
      },
      {
        path:"register",
        element:<Register />
      },
    ]
    
  }
],
{
  basename: process.env.NODE_ENV === "production" ? "/react-router-dom" : "/"
}
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
