import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import "react-day-picker/dist/style.css" 
import ToDoList from './components/ToDoList.jsx'
import Header from './components/Header.jsx'
import TaskMenu from './components/TaskMenu.jsx'


const css = `
.my-today{
  color:red
}
.my-selected{
  border: 2px solid white;
  background-color: #213547;
}
`



function App() {
  const [selected, setSelected] = useState()
  
  let date = <p>please pick a day</p>
  if (selected) {
    date = <p className='title-date'> {format(selected, "dd.MM.yyyy")} </p>
  }

  return (
    <>
    <Header/>
    <div className='app'>
      <div className='date-picker'>
          <style> {css} </style>
        <DayPicker
          mode='single'
          selected={selected}
          onSelect={setSelected}
          modifiersClassNames={{
            selected: 'my-selected',
            today: 'my-today'
          }}
          showOutsideDays
        />
      </div>
      <div className='add-habits'>
        {/* <TaskMenu selected={date}/> */}
        <ToDoList 
        date={date}
        selected={selected}
        />
      </div>
      
      
    </div>
    </>
  )
}

export default App