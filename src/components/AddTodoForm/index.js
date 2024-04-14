import React from "react";
import { AppContext } from "../AppContext";
import './AddTodoForm.css'
function AddTodoForm() {
    let {setNewTodoState: newTodoInputChangeState, onAdd, newTodoState} = React.useContext(AppContext)
    return (<section className="AddTodoFormContainer">
        <label>Nombre de tu tarea</label>
        <input className='input-modal' onChange={(e) => {
            newTodoInputChangeState(e.target.value);
        }}></input>
        <button onClick={() => {
            onAdd(newTodoState)
        }}>Agregar tarea</button>
    </section>)
}
export {AddTodoForm};