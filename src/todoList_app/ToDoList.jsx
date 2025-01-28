import React,{useState} from "react";
import styles from "./ToDoList.module.css";
function ToDoList() {
    const [tasks,setTask]=useState([]);
    const [newTask,setNewTask]=useState('');

    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    
    function addTask(){
        if (newTask.trim() !== "") {
            setTask([...tasks, newTask]);
            setNewTask(""); // Clear the input field after adding
        }

    }

    function deleteTask(index){
        const updateTask=tasks.filter((_,i) => i != index);
        setTask(updateTask);

    }

    function moveTaskUp(index){

        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTask(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }

    }

    return ( <div className={styles["to-do-list"]}>
        <h1>To-Do-List</h1>
        <div>
            <input 
            type="text" 
            placeholder="Enter a task...." 
            value={newTask}
            onChange={handleInputChange}/>
            <button className={styles["add-button"]} 
                    onClick={addTask}>Add
            </button>
        </div>

        <ol>
            {tasks.map((task,index) => 
            <li key={index}>
                <span className={styles["text"]}>{task}</span>
                <button 
                      className={styles["delete-button"]}
                      onClick={() => deleteTask(index)}>Delete
                </button>
                <button 
                      className={styles["move-button"]}
                      onClick={() => moveTaskUp(index)}>👆
                </button>
                <button 
                      className={styles["move-button"]}
                      onClick={() => moveTaskDown(index)}>👇
                </button>
                
            </li>)}
        </ol>

    </div> );
}
 
export default ToDoList;