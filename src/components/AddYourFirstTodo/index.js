import img from './firstTodoImg.png'
import './AddYourFirstTodo.css'
function AddYourFirstTodo() {
    return (<section className='addYourFirstTodoContainer'>
        <p className='not-todos'>Agrega tu primera tarea</p>
        <img src={img} alt="First Todo Img" className='addYourFirstTodo-img'></img>
    </section>)
}
export {AddYourFirstTodo}