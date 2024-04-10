import './AddNewTodo.css'
import Task from './task.png';
function AddNewTodo() {
    return (<button onClick={(e) => {
        console.log(e)
    }}>
        <img src={Task} alt="Task Icon"/>
        Añadir una tarea</button>)
}

export {AddNewTodo};