import './SingleTodo.css'
import { CloseComponent } from './CloseComponent';
import { CheckComponent } from './CheckComponent';
function SingleTodo(props) {
    let {terminado, texto} = props;
    return (<section className={`single-todo ${terminado ? "todo-done" : "todo-incompleted"}`}>
        <CheckComponent completed={terminado}/>
        <p>{texto}</p>
        <CloseComponent completed={terminado}/>
    </section>)
}
export {SingleTodo};