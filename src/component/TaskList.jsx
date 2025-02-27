import { useState } from "react";
import Task from "./Task";
import { initialTasks } from '../data/initialTasks'

export default function TaskList(){
    const [ task, setTasks] =useState(initialTasks);


    return (
        
        <ul>
           { task.map((task) =>
         <li key={task.id}>
         <Task task={ task}/>
        </li> 

        )}
        </ul>
        
    );
}

