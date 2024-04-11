import './SingleTodo.css'
import { CloseComponent } from './CloseComponent';
import { CheckComponent } from './CheckComponent';
function SingleTodo(props) {
    let {terminado, texto, onComplete, onDelete} = props;
    return (<section className={`single-todo ${terminado ? "todo-done" : "todo-incompleted"}`}>
        <CheckComponent completed={terminado} onComplete={onComplete}/>
        <p>{texto}</p>
        <CloseComponent completed={terminado} onDelete={onDelete}/>
    </section>)
}
export {SingleTodo};