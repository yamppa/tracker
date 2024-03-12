import React, { useState } from 'react'
import "./ToDoList.css"

function ToDoList() {
  
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("");

    function handleinputChange(e) {
        setNewTask(e.target.value)
    }
    function addTask() {
        if(newTask.trim() !== ""){    
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return (
    <div className='to-do-list'>

        

        <div>
            <input className='to-do-input' type="text"
            placeholder='Enter a task'
            value={newTask}
            onChange={handleinputChange} />
            <button className='add-button'
            onClick={addTask}>
                Add
            </button>
        </div>

        <ol className='to-list'>
            {tasks.map((task, index) =>
            <li className='do-list' key={index}>
                <span className='text'>{task}</span>
                <div className='buttons'>
                    <button className='done-button' onClick={ () => deleteTask(index)}>Done</button>
                    {/* <button className='move-button' onClick={ () => moveTaskUp(index)}>up</button>
                    <button className='move-button' onClick={ () => moveTaskDown(index)}>Down</button> */}
                </div>
            </li>
            )}
        </ol>

    </div>
  )
}

export default ToDoList