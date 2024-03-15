import './NavMenu.css';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import IconMenu from './icons/IconMenu';

function NavMenu( ) {
  return (
    <>
   
    <Navbar>
    
      <NavItem icon={<IconMenu/>}>
        <DropdownMenu></DropdownMenu>
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

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item-menu">
      <a href="#" className="icon-button-menu" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
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
          <span className="icon-button">{props.leftIcon}</span>
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
          <DropdownItem
            leftIcon= ""
            goToMenu="Calendar">
            Calendar 
          </DropdownItem>
          <DropdownItem
            leftIcon=""
            rightIcon=""
            goToMenu="Stats">
            Stats
          </DropdownItem>
          <DropdownItem
            leftIcon=""
            rightIcon=""
            goToMenu="About">
            About
          </DropdownItem>
          <DropdownItem
            leftIcon=""
            rightIcon=""
            goToMenu="--">
            --
          </DropdownItem>

        </div>
      </CSSTransition>


    </div>
  );
}

export default NavMenu;