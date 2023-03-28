import { useState } from 'react';
import Task from '../components/Task';
import './AddTask.css';

const AddTask = () => {
    const [inputTask, setinputTask] = useState("");
    const [editTask, seteditTask] = useState("");
    const [tasks, setTasks] = useState([]);
    // const [completed, setCompleted] = useState([]);

    
  
    const handleInputChange = (e) => {
      setinputTask(e.target.value);
    };
  
    const handleAddTask = () => {
      if (inputTask) {
        setTasks([...tasks, inputTask]);
        setinputTask(""); //Volvemos a dejar vacia para añadir new tasks
      }
    };
  
    const editInput = (e) => {
      seteditTask(e.target.value);
  
    };
    
    const btnEdit = (id) => {
      if (editTask) {
        setTasks(tasks.map((nameTask, indice) => {
          if (indice === id) {
            return editTask;
          } else {
            return nameTask;
          }
        }));
      }
    };
    const btnDelete = (id,name) => {
      console.log(tasks[id], name)
      const listTasques = tasks.filter((task, index) => index !== id);
      setTasks(listTasques);
  
    };

    // const handleCompleteTask = (id) => {
    //   setCompleted(completed.map((state, index) => {
    //     if (index === id) {
    //       return !state; // cambiar estado al opuesto
    //     } else {
    //       return state;
    //     }
    //   }));
    // };

  
  
    return (    
    <div className = 'box'>
        <input className = "inpt" value={inputTask} onChange={handleInputChange} placeholder= "Escribe la task" />
        <button className = "btn" onClick={handleAddTask}>Añade una tarea</button>

          {tasks.map((task, index) => (
            <Task
            id = "tasks" 
            indice = {index}
            name = {task}
            handleChange={editInput}
            handleBottom={btnEdit}
            handleBottomDel={btnDelete}
            // handleComplete={() => handleCompleteTask(index)}

            >
            </Task>
          ))}
    
      </div>
    );
}

export default AddTask;
