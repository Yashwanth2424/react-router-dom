import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'


import ErrorPage from './Components/ErrorPage.jsx'
import Translator from './Components/Translator.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage/>, 
    children: [
      { index: true, element: <Translator /> },

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
