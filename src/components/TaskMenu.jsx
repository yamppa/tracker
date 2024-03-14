import './TaskMenu.css';


import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function TaskMenu() {
  return (
    <>
   
    <Navbar>
    
      <NavItem icon="➕">
        <DropdownMenu ></DropdownMenu>
      </NavItem>
      
    </Navbar>
    </>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
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
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  
  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            leftIcon= "💪"
            goToMenu="physical">
            Physical</DropdownItem>
          <DropdownItem
            leftIcon="Ⓜ"
            rightIcon=""
            goToMenu="mental">
            Mental
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon=""
            goToMenu="growth">
            Growth
          </DropdownItem>
          <DropdownItem
            leftIcon="🚬"
            rightIcon="🙌"
            goToMenu="study">
            Study
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'physical'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="<">
            <h2>Physical</h2>
          </DropdownItem>
          <DropdownItem leftIcon=""  >Exercise</DropdownItem>
          <DropdownItem leftIcon="">Hygiene</DropdownItem>
          <DropdownItem leftIcon="">Sleep</DropdownItem>
          <DropdownItem leftIcon="">Nutrition</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'mental'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="<">
            <h2>Mental</h2>
          </DropdownItem>
          <DropdownItem leftIcon="">--</DropdownItem>
          <DropdownItem leftIcon="">---</DropdownItem>
          <DropdownItem leftIcon="">----</DropdownItem>
          <DropdownItem leftIcon="">-----</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'growth'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="<">
            <h2>Growth</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘"></DropdownItem>
          <DropdownItem leftIcon="🐸"></DropdownItem>
          <DropdownItem leftIcon="🦋"></DropdownItem>
          <DropdownItem leftIcon="🦔"></DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'study'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="<">
            <h2>Study</h2>
          </DropdownItem>
          <DropdownItem leftIcon="">--</DropdownItem>
          <DropdownItem leftIcon="">---</DropdownItem>
          <DropdownItem leftIcon="">----</DropdownItem>
          <DropdownItem leftIcon="">-----</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default TaskMenu;