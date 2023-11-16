import React from 'react'
import Home from '../components/Pages/Home'
import About from '../components/Pages/About'
import Contact from '../components/Pages/Contact'
import Shop from '../components/Pages/Shop'
import Login from '../components/Login'
import Gallery from '../components/Pages/Gallery'
import Register from '../components/Register'
import {Routes, Route } from 'react-router-dom'
import NavOutlets from '../components/NavOutlets'
import Profile from '../components/Pages/Profile'
import Shop2 from '../components/Shop2'
import { CartProvider } from '../components/Context/CartContext'

function AppRoueter() {

  return (
    <>   
   <CartProvider>
      <Routes>
        <Route path="Dashboard/Login?" element={<Login />} />
        <Route path="Dashboard/Register" element={<Register/>} />
       
        <Route path="/" element={<NavOutlets />} >
          <Route path="/"     element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Shop/Shop/:position" element={<Shop2 />}/>
          <Route path="/Gallery"     element={<Gallery />} />
         <Route path="/Contact" element={<Contact />} />
         <Route path="/Profile" element={<Profile />} />
         <Route path="/About"     element={<About />} />
        </Route>
        
      </Routes>
    </CartProvider>
    </>
  )
}

export default AppRoueter