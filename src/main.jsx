import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Feature from './Components/Feature.jsx'
import Hero from './Components/Hero.jsx'
import Blog from './Components/Blog.jsx'
import Team from './Components/Team.jsx'
import Contact from './Components/Contact.jsx'
import Menu from './Components/Menu.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
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
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
