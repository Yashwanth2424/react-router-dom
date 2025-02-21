import React from 'react'
import "./App.css"
// import Header from './Components/Header'
// import Footer from "./Components/Footer"

import { Outlet } from 'react-router-dom'

function App () {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App