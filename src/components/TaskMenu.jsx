import './TaskMenu.css';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import IconMentalHealth from './icons/IconMentalHealth';
import IconBody from './icons/IconBody';
import IconArrowBackOutline from './icons/IconArrowBackOutline';
import IconAddSmall from './icons/IconAddSmall';
import IconArrowsRotate from './icons/IconArrowsRotate';
import IconBook from './icons/IconBook';
import IconBrush from './icons/IconBrush';
import IconButterflyOutline from './icons/IconButterflyOutline';
import IconBxBed from './icons/IconBxBed';
import IconBxDrink from './icons/IconBxDrink';
import IconCandyOutline from './icons/IconCandyOutline';
import IconCigarette from './icons/IconCigarette';
import IconCoffee from './icons/IconCoffee';
import IconCross1 from './icons/IconCross1';
import IconFoodAppleOutline from './icons/IconFoodAppleOutline';
import IconFrog from './icons/IconFrog';
import IconJar from './icons/IconJar';
import IconLocationFood from './icons/IconLocationFood';
import IconMirror from './icons/IconMirror';
import IconMobileScreen from './icons/IconMobileScreen';
import IconNotebookEditOutline from './icons/IconNotebookEditOutline';
import IconPeople from './icons/IconPeople';
import IconShower from './icons/IconShower';
import IconStock from './icons/IconStock';
import IconWaterSharp from './icons/IconWaterSharp';
import IconWeightLifter from './icons/IconWeightLifter';
import IconMoneyBill1 from './icons/IconMoneyBill1';
import IconGraphUpArrow from './icons/IconGraphUpArrow';
import IconSprout from './icons/IconSprout';
import IconHandHoldingDroplet from './icons/IconHandHoldingDroplet';
import IconShowerHead from './icons/IconShowerHead';
import IconDental from './icons/IconDental';
import IconLotionOutline from './icons/IconLotionOutline';
import IconPersonRunning from './icons/IconPersonRunning';
import IconPersonWalking from './icons/IconPersonWalking';
import IconGym from './icons/IconGym';
import IconTennis from './icons/IconTennis';
import IconSleep from './icons/IconSleep';
import IconStar from './icons/IconStar';
import IconFlowerTulip from './icons/IconFlowerTulip';
import IconBxTask from './icons/IconBxTask';



function TaskMenu({addTask, date}) {
  const [open, setOpen] = useState(false);
  
  return (
    <>
   
    <Navbar>
    
      <NavItem icon={<IconAddSmall/>} open={open} setOpen={setOpen}>
        <DropdownMenu addTask={addTask} open={open} setOpen={setOpen} date={date} />
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

function DropdownMenu( {addTask, date, setOpen}) {
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
    <div 
      className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        /* timeout={500} */
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <div className='header-item'>
            
            <p className='add-tasks-title'>{date}</p>
            <button className='close-button' onClick={() => setOpen(false)}>close</button>
          </div>
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
            leftIcon={<IconSprout/>}
            rightIcon=""
            goToMenu="growth">
            Growth
          </DropdownItem>
          <DropdownItem
            leftIcon={<IconGraphUpArrow/>}
            rightIcon=""
            goToMenu="productivity">
            Productivity
          </DropdownItem>
          <DropdownItem
            leftIcon={<IconAddSmall/>}
            rightIcon=""
            goToMenu="">
            Add task
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
          leftIcon={<IconWeightLifter/>}
          goToMenu="exercise"
          className="menu"
           >Exercise
           </DropdownItem>
          
          <DropdownItem 
          leftIcon={<IconShower/>}
          goToMenu="hygiene"
          >
            Hygiene
          </DropdownItem>
          
          <DropdownItem 
          leftIcon={<IconBxBed/>}
          goToMenu="sleep">
            Sleep
          </DropdownItem>
          
          <DropdownItem 
          leftIcon={<IconLocationFood/>}
          goToMenu="nutrition">
            Nutrition
          </DropdownItem>

          <DropdownItem 
          leftIcon={<IconCross1/>}
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
            leftIcon={<IconPersonRunning/>} >
               <button 
                className="dropdown-button" 
                onClick={() => {addTask("Exercise");
                  setOpen(false);}}
                  >
                Exercise
                </button>
          </DropdownItem>
          <DropdownItem leftIcon={<IconPersonWalking/>} >
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Walk");
                  setOpen(false) }}
                  >
                Walk
                </button>
          </DropdownItem>
          <DropdownItem leftIcon={<IconGym/>} >
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Gym");
                  setOpen(false) }}
                  >
                Gym
                </button>
          </DropdownItem>
          <DropdownItem leftIcon={<IconTennis/>} >
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
            leftIcon={<IconHandHoldingDroplet/>} >
               <button 
                className="dropdown-button" 
                onClick={() => {addTask("Wash hands");
                  setOpen(false);}}
                  >
                Wash hands
                </button>
          </DropdownItem>
          <DropdownItem leftIcon={<IconShowerHead/>} >
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Showering");
                  setOpen(false) }}
                  >
                Showering
                </button>
          </DropdownItem>
          <DropdownItem leftIcon={<IconDental/>} >
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Brush teeth");
                  setOpen(false) }}
                  >
                Brush teeth
                </button>
          </DropdownItem>
          <DropdownItem leftIcon={<IconLotionOutline/>} >
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
            leftIcon={<IconSleep/>} >
               <button 
                className="dropdown-button" 
                onClick={() => {addTask("Set Timer");
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
            leftIcon={<IconJar/>} >
               <button 
                className="dropdown-button" 
                onClick={() => {addTask("Vitamins");
                  setOpen(false);}}
                  >
                Vitamins
                </button>
          </DropdownItem>
          <DropdownItem leftIcon= {<IconWaterSharp/>} >
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Drink water");
                  setOpen(false) }}
                  >
                Drink water
                </button>
          </DropdownItem>
          <DropdownItem leftIcon={<IconFoodAppleOutline/>}
          >
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
            leftIcon={<IconCoffee/>}
            >
               <button 
                className="dropdown-button" 
                onClick={() => {addTask("Limit caffeine");
                  setOpen(false);}}
                  >
                Caffeine
                </button>
          </DropdownItem>
          <DropdownItem leftIcon={<IconCigarette/>}
          >
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Limit nicotine");
                  setOpen(false) }}
                  >
                Nicotine
                </button>
          </DropdownItem>
          <DropdownItem leftIcon={<IconBxDrink/>}
          >
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Limit Alcohol");
                  setOpen(false) }}
                  >
                Alcohol
                </button>
          </DropdownItem>
          
          <DropdownItem leftIcon={<IconCandyOutline/>}
          >
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Limit sugar");
                  setOpen(false) }}
                  >
                Sugar
                </button>
          </DropdownItem>
          
          <DropdownItem leftIcon={<IconMobileScreen/>}>
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
            <h2>Mental Health</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<IconFlowerTulip/>} >
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Mindfulness");
                  setOpen(false);}}
                  >
                Mindfulnesss
                </button>
          
          </DropdownItem>
          <DropdownItem leftIcon={<IconPeople/>}>
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Relationships");
                  setOpen(false);}}
                  >
                Relationships
                </button>
          
          </DropdownItem>
          <DropdownItem leftIcon={<IconFrog/>} >
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Self-awareness");
                  setOpen(false);}}
                  >
                Self-awareness
                </button>
          </DropdownItem>

          <DropdownItem leftIcon={<IconBrush/>} >
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Creative");
                  setOpen(false);}}
                  >
                Creative outlets
                </button>
          </DropdownItem>
          
          <DropdownItem leftIcon={<IconMirror/>}>
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Self worth");
                  setOpen(false);}}
                  >
                Self worth
                </button>
          </DropdownItem>
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
          <DropdownItem leftIcon={<IconStock/>} >
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Self improvement");
                  setOpen(false);}}
                  >
                Self improvement
                </button>
          </DropdownItem>

          <DropdownItem leftIcon={<IconStar/>} >
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Goals");
                  setOpen(false);}}
                  >
                Goals
                </button>
          </DropdownItem>

          <DropdownItem leftIcon={<IconNotebookEditOutline/>} >
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Journaling");
                  setOpen(false);}}
                  >
                Journaling
                </button>
          </DropdownItem>

          <DropdownItem leftIcon={<IconButterflyOutline/>} >
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Mindset");
                  setOpen(false);}}
                  >
                Mindset
                </button>
          </DropdownItem>

          <DropdownItem leftIcon={<IconMirror/>}>
          <button 
                className="dropdown-button" 
                onClick={() => {addTask("Self-image");
                  setOpen(false);}}
                  >
                Self-image
                </button>
          </DropdownItem>
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
          leftIcon={<IconBxTask/>} >
            
            <button 
                className="dropdown-button" 
                onClick={() => {addTask("Chores");
                  setOpen(false);}}
                  >
                Chores
                </button>
            </DropdownItem>
          <DropdownItem 
          leftIcon={<IconBook/>}
          >
            
            <button 
                className="dropdown-button" 
                onClick={() => {addTask("School/Work");
                  setOpen(false);}}
                  >
                School/Work
                </button>
            </DropdownItem>
          <DropdownItem 
          leftIcon={<IconArrowsRotate/>}
          goToMenu="habits">
            Habits
            
            </DropdownItem>
          <DropdownItem 
          leftIcon={<IconMoneyBill1/>}
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