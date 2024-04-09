import './TodoList.css'
function TodoList(props) {
    return (<section className="list">
        {props.children}
    </section>)
}
export {TodoList};