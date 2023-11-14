import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Covid from '../components/Covid'
import { Outlet } from 'react-router-dom'

function NavOutlets() {
  return (
    <>
    <Navbar/>
    <Covid />
  <Outlet />
    <Footer/>
  
    </>
  )
}

export default NavOutlets