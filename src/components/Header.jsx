import React from 'react'
import "./Header.css"
import NavMenu from './NavMenu.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from '../About.jsx'
import Homepage from '../Homepage.jsx'


function Header() {
  return (
    <div className='header' id='myHeader'>
        
        <h1 className='title'>Routinix</h1>
        <NavMenu/>
        
    </div>
  )
}

export default Header