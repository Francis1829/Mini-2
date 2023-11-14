import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppRoueter from './Routes/AppRoueter'


function App() {

  return (
    <> 
      
    <BrowserRouter>
    <AppRoueter />
    </BrowserRouter>
    </>
  )
}

export default App
