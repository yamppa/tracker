import React, { useState, useEffect } from 'react';
import { format, addDays } from 'date-fns';
import "./Weekly.css";

function Weekly({ selected }) {
    const calculateWeekAhead = () => {
        const weekDates = [];
        if (selected) {
            let currentDate = new Date(selected);
            for (let i = 0; i < 7; i++) {
                weekDates.push(currentDate);
                currentDate = addDays(currentDate, 1);
            }
        }
        return weekDates;
    };

    const weekDates = calculateWeekAhead();

    const [tasks, setTasks] = useState([]);

    const areTasksEqual = (tasks1, tasks2) => {
        if (tasks1.length !== tasks2.length) {
            return false;
        }
        for (let i = 0; i < tasks1.length; i++) {
            if (tasks1[i] !== tasks2[i]) {
                return false;
            }
        }
        return true;
    };

    useEffect(() => {
        let runs = 0;

        const fetchTasks = () => {
            const newTasks = weekDates.map(date => {
                const dateString = format(date, "dd.MM.yyyy");
                const storedTasks = localStorage.getItem(dateString);
                return JSON.parse(storedTasks || '[]');
            });

            if (!areTasksEqual(tasks, newTasks)) {
                setTasks(newTasks);
            }
        };

        const interval = setInterval(() => {
            fetchTasks();
            runs++;

            if (runs >= 5) {
                clearInterval(interval);
            }
        }, 10); 

        return () => clearInterval(interval);
    }, [selected, weekDates, tasks]);

    return (
        <div className='gridbox'>
            

            <div className="grid-container">
                {weekDates.map((date, index) => (
                    <div className="grid-item" key={index}>
                        {format(date, "dd.MM")}
                        <div className='grid-tasks'>
                            <ul>
                                {tasks[index] && tasks[index].map((task, taskIndex) => (
                                    <li key={taskIndex}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Weekly;
