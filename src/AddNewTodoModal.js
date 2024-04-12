import './addNewTodoModal.css'
function AddNewTodoModal({onClose, currentState, onAdd}) {
    return (<section className={`modal ${currentState ? '' : 'hidden'}`}>
        <p className='closeModal' onClick={onClose}>X</p>
        <label>Nombre de tu tarea</label>
        <input className='input-modal'></input>
        <button onClick={onAdd}>Agregar tarea</button>
    </section>)
}
export {AddNewTodoModal}