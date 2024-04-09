import './totaltodos.css'
function TodoCounter(props) {
    let {total, completed} = props;
    return (<section>
        <h1>Has completado {completed} de {total} TODOS</h1>
    </section>)
}
export {TodoCounter};