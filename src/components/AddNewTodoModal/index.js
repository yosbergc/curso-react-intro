import './addNewTodoModal.css'
function AddNewTodoModal({onToggle, onAdd, newTodoInputChangeState}) {
    return (<section className={`modal`}>
        <p className='closeModal' onClick={onToggle}>X</p>
        <label>Nombre de tu tarea</label>
        <input className='input-modal' onChange={(e) => {
            newTodoInputChangeState(e.target.value);
        }}></input>
        <button onClick={onAdd}>Agregar tarea</button>
    </section>)
}
export {AddNewTodoModal}