import './TodoCounter.css'
function TodoCounter(props) {
    let {total, completed} = props;
    return (<section>
        <h1>Has completado {completed} de {total} tareas</h1>
    </section>)
}
export {TodoCounter};