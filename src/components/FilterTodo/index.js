import React from 'react';
import './filterTodo.css'
import { AppContext } from '../AppContext';

function AddTodo() {
    let data = React.useContext(AppContext)
    return (<section className='filterSection'>
        <input type="text"
        placeholder="Filtra tus tareas"
        onChange={(e) => {
            data.setAddTodoState(e.target.value);
        }}
        value={data.AddTodoState}></input>
    </section>)
}
export {AddTodo};