import React, { useState, useEffect } from 'react';
import "./ToDoList.css";
import TaskMenu from './TaskMenu.jsx';
import Cookies from 'js-cookie';
import IconCheckmark from './icons/IconChechmark.jsx';

function ToDoList(props) {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const date = props.date && props.date.props.children;
    
    useEffect(() => {
        if (date) {
            // Load tasks from cookies when component mounts
            const storedTasks = Cookies.get(date);
            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
            } else {
                // Clear tasks if there are no tasks stored for the selected date
                setTasks([]);
            }
        }
    }, [date]);

    useEffect(() => {
        if (date) {
            // Save tasks to cookies whenever tasks or date change
            Cookies.set(date, JSON.stringify(tasks));
        }
    }, [tasks, date]);

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask(taskValue) {
        setTasks(t => [...t, taskValue]);
        setNewTask("");
        
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }


        
    

    return (
        <div className='to-do-list'>
            <TaskMenu addTask={addTask} />

            <div>
                <h2>{props.date}</h2>
                
            </div>

            <ol className='to-list'>
                {tasks.map((task, index) =>
                    <li className='do-list' key={index}>
                        <span className='text'>{task}</span>
                        <div className='buttons'>
                            <button className='done-button' onClick={() => deleteTask(index)}><IconCheckmark/></button>
                            
                        </div>
                    </li>
                )}
            </ol>
            
            
        </div>
    );
}

export default ToDoList;
