import React, { useState, useEffect } from 'react';
import { format, addDays, subDays, startOfWeek, endOfWeek, isMonday, getDay, isToday } from 'date-fns';
import "./Weekly.css";

function Weekly({ selected }) {
    const [startDate, setStartDate] = useState(new Date());

    const calculateWeekDates = (start) => {
        const weekDates = [];
        const mondayOfWeek = startOfWeek(start, { weekStartsOn: 1 }); // Start from Monday
        for (let i = 0; i < 7; i++) {
            const currentDate = addDays(mondayOfWeek, i);
            weekDates.push(currentDate);
        }
        return weekDates;
    };

    const weekDates = calculateWeekDates(startDate);

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
        }, 1); 

        return () => clearInterval(interval);
    }, [selected, weekDates, tasks]);

    const goToLastWeek = () => {
        const newStartDate = subDays(startOfWeek(startDate, { weekStartsOn: 1 }), 7); // Start from Monday
        setStartDate(newStartDate);
    };

    const goToNextWeek = () => {
        const newStartDate = addDays(startOfWeek(startDate, { weekStartsOn: 1 }), 7); // Start from Monday
        setStartDate(newStartDate);
    };

    const goToThisWeek = () => {
        setStartDate(new Date());
    };

    return (
        <div className='gridbox'>
            <div className="navigation-buttons">
                <button className='week-button' onClick={goToLastWeek}>Last Week</button>
                <button className='week-button' onClick={goToThisWeek}>This Week</button>
                <button className='week-button' onClick={goToNextWeek}>Next Week</button>
            </div>

            <div className="grid-container">
                {weekDates.map((date, index) => (
                    <div className={"grid-item" + (isToday(date) ? " today" : "")} key={index}>
                        <div className="date-info">
                            <div className="day-name">{format(date, "iiii")}</div>
                            <div className="date">{format(date, "dd.MM")}</div>
                        </div>
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
