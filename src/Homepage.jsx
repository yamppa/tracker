import { useState, useEffect } from 'react'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import "react-day-picker/dist/style.css" 
import ToDoList from './components/ToDoList.jsx'




const css = `
.my-today{
  color:red
}
.my-selected{
  border: 2px solid white;
  background-color: #213547;
}
`



function Homepage() {
  const [selected, setSelected] = useState()
  
  
  
  let date = <p>Pick a date</p>
  if (selected) {
    date = <p className='title-date'> {format(selected, "dd.MM.yyyy")} </p>
  }
  const dateString = date.props.children[1];
  
  useEffect(() => {
    console.log(dateString);
    
    const storedTasks = localStorage.getItem(dateString);
    console.log("Stored tasks:", storedTasks);
  }, [dateString]);
  

  return (
    <>
    
    
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
      
        
        <ToDoList 
        date={dateString}
        selected={selected}
        
        />
      
      
      
      
    </div>
    
    </>
  )
}

export default Homepage