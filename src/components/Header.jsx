import React from 'react'
import "./Header.css"
import NavMenu from './NavMenu.jsx'

function Header() {
  return (
    <div className='header' id='myHeader'>
        
        <h1 className='title'>Habit Tracker</h1>
        <NavMenu/>
    </div>
  )
}

export default Header