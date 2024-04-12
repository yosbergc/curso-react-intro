import './AddNewTodo.css'
import Task from './task.png';

function AddTodoBtn({onClicked}) {
    return (<button onClick={onClicked}
    className='addBtnShowModal'>
        <img src={Task} alt="Task Icon"/>
        Añadir una tarea</button>)
}

export {AddTodoBtn};