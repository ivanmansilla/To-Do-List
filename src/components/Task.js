import './Task.css';


export function Task({id, indice, name, handleChange, handleBottom, handleBottomDel}){
    // const handleClick = () => {
    //     handleCompleted();
    //   }
    
    //   const taskClass = `task ${completed ? 'completed' : ''}`;

    return <div id={id} indice={indice}> 
            {name}
            <input id = 'inptEdit' key={indice} placeholder = "Edita" onChange={handleChange}></input>
            <button className = 'btnEdit' onClick={() => handleBottom(indice)}> Edita la task</button>
            <button className = 'btnDelete' onClick={() => handleBottomDel(indice, name)}>DELETE</button>
            {/* <button className='btnProgress' onClick={handleClick}>Completed</button> */}
            
            
             
        </div>
}

export default Task;