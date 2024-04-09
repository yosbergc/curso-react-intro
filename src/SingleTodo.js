import './SingleTodo.css'
import close from  './close.png'
import check from './check.png'
function SingleTodo(props) {
    let {terminado, texto} = props;
    return (<section className='single-todo'>
        <img src={check} alt="Check icon"/>
        <p>{texto}</p>
        <img src={close} alt="Close Icon" className='closeIcon'/>
    </section>)
}
export {SingleTodo};