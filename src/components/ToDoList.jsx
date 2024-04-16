import React, { useState, useEffect } from 'react';
import "./ToDoList.css";
import TaskMenu from './TaskMenu.jsx';
import IconCheckmark from './icons/IconChechmark.jsx';
import Weekly from './Weekly.jsx';

function ToDoList(props) {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const date = props.date 
    const selected = props.selected
  
    useEffect(() => {
        if (date) {
            
            const storedTasks = localStorage.getItem(date);
            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
                
            } else {
                setTasks([]);
            } 
        }
    }, [date]);

    useEffect(() => {
        if (date) {
            localStorage.setItem(date, JSON.stringify(tasks));
        }
    }, [tasks, date]);

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask(taskValue) {
        setTasks(prevTasks => [...prevTasks, taskValue]);
        setNewTask("");
        console.log(tasks) 
        localStorage.setItem(date, JSON.stringify([...tasks, taskValue]));
         
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem(date, JSON.stringify(updatedTasks));
    }
    

    return (
        <>
        <div className='to-do-list'>
            
            <TaskMenu addTask={addTask} date={date} />

            
                              
        

            <ol className='to-list'>
                {tasks.map((task, index) =>
                    <li className='do-list' key={index}>
                        <span className='text'>{task}</span>
                        <div className='buttons'>
                            <button className='done-button' onClick={() => deleteTask(index)}><IconCheckmark/></button>                            
                            <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                        </div>

                    </li>
                )}
            </ol>
        </div>
        <div className='weekly'>
            <Weekly selected={selected} tasks={tasks} date={date} />
        </div>
        </>
    );
}

export default ToDoList;