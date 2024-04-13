import React from 'react';
import './filterTodo.css'

function AddTodo(props) {
    let {valorBusqueda, setValorBusqueda} = props;
    return (<section className='filterSection'>
        <input type="text"
        placeholder="Filtra tus tareas"
        onChange={(e) => {
            setValorBusqueda(e.target.value);
        }}
        value={valorBusqueda}></input>
    </section>)
}
export {AddTodo};