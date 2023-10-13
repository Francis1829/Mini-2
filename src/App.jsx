import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import Category from './components/Pages/Category'
import Games from './components/Pages/Games'
import Contact from './components/Pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
