import './NavMenu.css';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import IconMenu from './icons/IconMenu';
import { Link } from 'react-router-dom';
import IconCalendarEvent from './icons/IconCalendarEvent';
import IconStatsChart from './icons/IconStatsChart';
import IconAliwangwang from './icons/IconAliwangwang';

function NavMenu( ) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {setOpen(false)}
  return (
    <>
   
    <Navbar>
    
      <NavItem icon={<IconMenu/>} open={open} setOpen={setOpen} >
        <DropdownMenu open={open} setOpen={setOpen} handleClick={handleClick}/>
      </NavItem>
      
    </Navbar>
    </>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar-menu">
      <ul className="navbar-nav-menu">{props.children}</ul>
    </nav>
  );
}

function NavItem({icon, children, open, setOpen}) {
  

  return (
    <li className="nav-item-menu">
      <a href="#" className="icon-button-menu" onClick={() => setOpen(!open)}>
        {icon}
      </a>

      {open && children}
    </li>
  );
}

function DropdownMenu({handleClick}) {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    
    return (
        <a href="#" className="menu-item-menu" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="menu-icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }
  
  return (
    <div className="dropdown-menu" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        /* timeout={500} */
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu-menu">
          <Link to='/tracker/' onClick={handleClick}>
          <DropdownItem
            leftIcon= {<IconCalendarEvent/>}
            >
            Calendar 
          </DropdownItem>
          </Link>
          <Link to='/tracker/stats' onClick={handleClick}>
          <DropdownItem
            leftIcon={<IconStatsChart/>}
            rightIcon=""
            >
            Stats
          </DropdownItem>
          </Link>
          <Link to='/tracker/about' onClick={handleClick}>
          <DropdownItem
            leftIcon={<IconAliwangwang/>}
            rightIcon=""
            >
            About
          </DropdownItem>
          </Link>


        </div>
      </CSSTransition>


    </div>
  );
}

export default NavMenu;