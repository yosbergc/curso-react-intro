import './TodoCounter.css'
function TodoCounter(props) {
    let {total, completed} = props;
    let mensaje;
    if (total === completed && completed !== 0 && total !== 0) {
        mensaje = "Felicitaciones, has completado todas las tareas"
    } else if (total === 0 && completed === 0) {
        mensaje = "No hay tareas"
    } else {
        mensaje = `Has completado ${completed} de ${total} tareas`
    }
    return (<section>
        <h1>{mensaje}</h1>
    </section>)
}
export {TodoCounter};