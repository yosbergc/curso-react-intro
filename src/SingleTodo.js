import './SingleTodo.css'
function SingleTodo(props) {
    let {terminado, texto} = props;
    return (<section className='single-todo'>
        <span>{terminado}</span>
        <p>{texto}</p>
        <span className='deleteSingleTodo'>X</span>
    </section>)
}
export {SingleTodo};