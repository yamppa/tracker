import './TaskMenu.css';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import IconMentalHealth from './icons/IconMentalHealth';
import IconBody from './icons/IconBody';
import IconArrowBackOutline from './icons/IconArrowBackOutline';
import IconAddSmall from './icons/IconAddSmall';

function TaskMenu({addTask}) {
  const [open, setOpen] = useState(false);
  
  return (
    <>
   
    <Navbar>
    
      <NavItem icon={<IconAddSmall/>} open={open} setOpen={setOpen}>
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
            leftIcon={<IconBody/>}
            goToMenu="physical">
            Physical Health</DropdownItem>
          <DropdownItem
            leftIcon={<IconMentalHealth/>}
            rightIcon=""
            goToMenu="mental">
            Mental Health
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
            goToMenu="productivity">
            Productivity
          </DropdownItem>
          <DropdownItem
            leftIcon="🚬"
            rightIcon="🙌"
            goToMenu="own">
            Make own
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
          <DropdownItem goToMenu="main" leftIcon={<IconArrowBackOutline/>}>
            <h2>Physical Health</h2>
          </DropdownItem>
          <DropdownItem 
          leftIcon="" 
          goToMenu="exercise"
          className="menu"
           >Exercise
           </DropdownItem>
          
          <DropdownItem 
          leftIcon=""
          goToMenu="hygiene"
          >
            Hygiene
          </DropdownItem>
          
          <DropdownItem 
          leftIcon=""
          goToMenu="sleep">
            Sleep
          </DropdownItem>
          
          <DropdownItem 
          leftIcon=""
          goToMenu="nutrition">
            Nutrition
          </DropdownItem>

          <DropdownItem 
          leftIcon=""
          goToMenu="limit">
            Limit
          </DropdownItem>
        </div>
      </CSSTransition>
      
      <CSSTransition
        in={activeMenu === 'exercise'}
       /*  timeout={500} */
        classNames="menu-third"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu-secondary">
          <DropdownItem goToMenu="physical" leftIcon={<IconArrowBackOutline/>} rightIcon="">
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
        in={activeMenu === 'hygiene'}
       /*  timeout={500} */
        classNames="menu-third"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu-secondary">
          <DropdownItem goToMenu="physical" leftIcon={<IconArrowBackOutline/>} rightIcon="">
            <h2>Hygiene</h2>
          </DropdownItem>
          <DropdownItem 
            leftIcon="">
               <button 
                className="dropdown-button" 
                onClick={() => {addTask("Wash hands");
                  setOpen(false);}}
                  >
                Wash hands
                </button>
          </DropdownItem>
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Showering");
                  setOpen(false) }}
                  >
                Showering
                </button>
          </DropdownItem>
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Brush teeth");
                  setOpen(false) }}
                  >
                Brush teeth
                </button>
          </DropdownItem>
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Skincare");
                  setOpen(false) }}
                  >
                Skincare
                </button>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'sleep'}
       /*  timeout={500} */
        classNames="menu-third"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu-secondary">
          <DropdownItem goToMenu="physical" leftIcon={<IconArrowBackOutline/>} rightIcon="">
            <h2>Sleep</h2>
          </DropdownItem>
          <DropdownItem 
            leftIcon="">
               <button 
                className="dropdown-button" 
                onClick={() => {addTask("set timer");
                  setOpen(false);}}
                  >
                Set timer
                </button>
          </DropdownItem>
          
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'nutrition'}
       /*  timeout={500} */
        classNames="menu-third"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu-secondary">
          <DropdownItem goToMenu="physical" leftIcon={<IconArrowBackOutline/>} rightIcon="">
            <h2>Nutrition</h2>
          </DropdownItem>
          <DropdownItem 
            leftIcon="">
               <button 
                className="dropdown-button" 
                onClick={() => {addTask("Vitamins");
                  setOpen(false);}}
                  >
                Vitamins
                </button>
          </DropdownItem>
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Drink water");
                  setOpen(false) }}
                  >
                Drink water
                </button>
          </DropdownItem>
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Eat fruits/vegetables");
                  setOpen(false) }}
                  >
                Eat healthy
                </button>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'limit'}
       /*  timeout={500} */
        classNames="menu-third"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu-secondary">
          <DropdownItem goToMenu="physical" leftIcon={<IconArrowBackOutline/>} rightIcon="">
            <h2>Limit</h2>
          </DropdownItem>
          <DropdownItem 
            leftIcon="">
               <button 
                className="dropdown-button" 
                onClick={() => {addTask("Limit caffeine");
                  setOpen(false);}}
                  >
                Caffeine
                </button>
          </DropdownItem>
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Limit nicotine");
                  setOpen(false) }}
                  >
                Nicotine
                </button>
          </DropdownItem>
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Limit Alcohol");
                  setOpen(false) }}
                  >
                Alcohol
                </button>
          </DropdownItem>
          
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Limit sugar");
                  setOpen(false) }}
                  >
                Sugar
                </button>
          </DropdownItem>
          
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Limit screentime");
                  setOpen(false) }}
                  >
                Screentime
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
          <DropdownItem goToMenu="main" leftIcon={<IconArrowBackOutline/>}>
            <h2>Mental</h2>
          </DropdownItem>
          <DropdownItem leftIcon="">Mindfullnes</DropdownItem>
          <DropdownItem leftIcon="">Relationships</DropdownItem>
          <DropdownItem leftIcon="">Self-awareness</DropdownItem>
          <DropdownItem leftIcon="">Creative outlets</DropdownItem>
          <DropdownItem leftIcon="">Self worth</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'growth'}
       /*  timeout={500} */
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<IconArrowBackOutline/>}>
            <h2>Growth</h2>
          </DropdownItem>
          <DropdownItem leftIcon="">Self improvement</DropdownItem>
          <DropdownItem leftIcon="🐸">Goals</DropdownItem>
          <DropdownItem leftIcon="🦋">Journaling</DropdownItem>
          <DropdownItem leftIcon="🦋">Mindset</DropdownItem>
          <DropdownItem leftIcon="🦔">Self-image </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'productivity'}
       /*  timeout={500} */
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<IconArrowBackOutline/>}>
            <h2>Productivity</h2>
          </DropdownItem>
          <DropdownItem 
          leftIcon="">
            Chores
            </DropdownItem>
          <DropdownItem 
          leftIcon="">
            School/Work
            </DropdownItem>
          <DropdownItem 
          leftIcon=""
          goToMenu="habits">
            Habits
            </DropdownItem>
          <DropdownItem 
          leftIcon=""
          goToMenu="finance">
            Personal Finance
            </DropdownItem>
        </div>
      </CSSTransition>

      
      <CSSTransition
        in={activeMenu === 'habits'}
       /*  timeout={500} */
        classNames="menu-third"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu-secondary">
          <DropdownItem goToMenu="productivity" leftIcon={<IconArrowBackOutline/>} rightIcon="">
            <h2>Habits</h2>
          </DropdownItem>
          <DropdownItem 
            leftIcon="">
               <button 
                className="dropdown-button" 
                onClick={() => {addTask("clean");
                  setOpen(false);}}
                  >
                Cleaning
                </button>
          </DropdownItem>
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Laundry");
                  setOpen(false) }}
                  >
                Laundry
                </button>
          </DropdownItem>
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Dishes");
                  setOpen(false) }}
                  >
                Dishes
                </button>
          </DropdownItem>
          
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Change sheets");
                  setOpen(false) }}
                  >
                Change sheets
                </button>
          </DropdownItem>
          
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Make your bed");
                  setOpen(false) }}
                  >
                Make your bed
                </button>
                </DropdownItem>
            </div>
          </CSSTransition>
          
          <CSSTransition
        in={activeMenu === 'finance'}
       /*  timeout={500} */
        classNames="menu-third"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu-secondary">
          <DropdownItem goToMenu="productivity" 
          leftIcon={<IconArrowBackOutline/>}
          rightIcon="">
            <h2>Personal Finance</h2>
          </DropdownItem>
          <DropdownItem 
            leftIcon="">
               <button 
                className="dropdown-button" 
                onClick={() => {addTask("Pay bills");
                  setOpen(false);}}
                  >
                Pay bills
                </button>
          </DropdownItem>
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Shopping list");
                  setOpen(false) }}
                  >
                Shopping list
                </button>
          </DropdownItem>
          <DropdownItem leftIcon="">
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Budget planning");
                  setOpen(false) }}
                  >
                Budget planning
                </button>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default TaskMenu;