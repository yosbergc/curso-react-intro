import './AddNewTodo.css'
import Task from './task.png';
import Arrow from './right-arrow.png'
function AddTodoBtn({onClicked, isNotTodos}) {
    return (<section className='addNewTodoBtnContainer'>
        {isNotTodos && <img src={Arrow} alt="Right Arrow Icon" className='rightArrowBtn'></img>}
        <button onClick={onClicked}
        className='addBtnShowModal'>
        <img src={Task} alt="Task Icon"/>
        Añadir una tarea
        </button>
    </section>)
}

export {AddTodoBtn};