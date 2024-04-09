import { TodoCounter } from './TodoCounter';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';
import { SingleTodo } from './SingleTodo';
import { AddNewTodo } from './AddNewTodo';
import React from 'react';
import './App.css'
let arrayPorDefecto = [
    {texto: "Hacer comida con Verónica", terminado: false},
    {texto: "Aprender React", terminado: false},
    {texto: "Dormir", terminado: false},
    {texto: "Tomar café", terminado: true},
    {texto: "Cargar mi celular", terminado: false},
];
function App() {
    return (<React.Fragment>
        <section className='add-section'>
        <TodoCounter total={2} completed={1} />
        <AddTodo/>
        </section>
        <TodoList>
            {arrayPorDefecto.map(elemento => (
            <SingleTodo
            texto={elemento.texto}
            terminado={elemento.terminado}
            key={elemento.texto}/>)
            )}
        </TodoList>
        <AddNewTodo/>
    </React.Fragment>)
}

export {App};