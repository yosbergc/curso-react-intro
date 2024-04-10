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
    let [todoSingle, setTodosSingle] = React.useState(arrayPorDefecto);
    let [AddTodoState, setAddTodoState] = React.useState('');
    let totalCompleted = todoSingle.filter(single => (single.terminado)).length;
    let totalSingle = todoSingle.length;
    let todoFilter = todoSingle.filter(todo => todo.texto.toLowerCase().includes(AddTodoState.toLowerCase()));
    function completeTodo(text) {
        let newTodoList = [...todoSingle];
        let item = newTodoList.findIndex(item => item.texto === text)
        newTodoList[item].terminado = !newTodoList[item].terminado;
        setTodosSingle(newTodoList)
    }
    return (<React.Fragment>
        <section className='add-section'>
        <TodoCounter
            total={totalSingle}
            completed={totalCompleted}
        />
        <AddTodo 
            valorBusqueda={AddTodoState}
            setValorBusqueda={setAddTodoState}
        />
        </section>
        <TodoList>
            {todoFilter.map(elemento => (
            <SingleTodo
            texto={elemento.texto}
            terminado={elemento.terminado}
            key={elemento.texto}
            onComplete={() => {
                completeTodo(elemento.texto)
            }}/>)
            )}
        </TodoList>
        <AddNewTodo/>
    </React.Fragment>)
}

export {App};