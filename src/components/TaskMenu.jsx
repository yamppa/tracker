import './TaskMenu.css';


import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function TaskMenu({addTask}) {
  const [open, setOpen] = useState(false);
  
  return (
    <>
   
    <Navbar>
    
      <NavItem icon="➕" open={open} setOpen={setOpen}>
        <DropdownMenu addTask={addTask} open={open} setOpen={setOpen}/>
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

function NavItem({ icon, children, open, setOpen }) {
  
  
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {icon}
      </a>

      {open &&children}
    </li>
  );
}

function DropdownMenu( {addTask, open, setOpen}) {
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
        /* timeout={500} */
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
        /* timeout={500} */
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="<">
            <h2>Physical</h2>
          </DropdownItem>
          <DropdownItem 
          
          leftIcon="" 
          goToMenu="exercise"
          className="menu"
          
          
           >Exercise</DropdownItem>
          <DropdownItem leftIcon="">Hygiene</DropdownItem>
          <DropdownItem leftIcon="">Sleep</DropdownItem>
          <DropdownItem leftIcon="">Nutrition</DropdownItem>
        </div>
      </CSSTransition>
      
      <CSSTransition
        in={activeMenu === 'exercise'}
       /*  timeout={500} */
        classNames="menu-third"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu-secondary">
          <DropdownItem goToMenu="physical" leftIcon="" rightIcon="">
            <h2>Exercise</h2>
          </DropdownItem>
          <DropdownItem 
            leftIcon="">
               <button 
                className="dropdown-button" 
                onClick={() => {addTask("Exercise");
                  setOpen(false);}}
                  >
                Exercise
                </button>
          </DropdownItem>
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Walk");
                  setOpen(false) }}
                  >
                Walk
                </button>
          </DropdownItem>
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Gym");
                  setOpen(false) }}
                  >
                Gym
                </button>
          </DropdownItem>
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Sports");
                  setOpen(false) }}
                  >
                Sports
                </button>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'mental'}
       /*  timeout={500} */
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
       /*  timeout={500} */
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
          <DropdownItem leftIcon="🦔"> <button>hehe</button> </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'study'}
       /*  timeout={500} */
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