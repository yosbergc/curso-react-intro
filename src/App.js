import { TodoCounter } from './TodoCounter';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';
import { SingleTodo } from './SingleTodo';
import { AddTodoBtn } from './AddTodoBtn';
import { AddNewTodoModal } from './AddNewTodoModal';
import React from 'react';
import './App.css'
let arrayPorDefecto = [
    {texto: "Hacer comida con Verónica", terminado: false},
    {texto: "Aprender React", terminado: false},
    {texto: "Dormir", terminado: false},
    {texto: "Tomar café", terminado: true},
    {texto: "Cargar mi celular", terminado: false},
    {texto: "Dar comida a la chiquita", terminado: false},
];
function App() {
    let [todoSingle, setTodosSingle] = React.useState(arrayPorDefecto);
    let [AddTodoState, setAddTodoState] = React.useState('');
    let [modalAddTodo, setModalAddTodo] = React.useState(false)
    let totalCompleted = todoSingle.filter(single => (single.terminado)).length;
    let totalSingle = todoSingle.length;

    let todoFilter = todoSingle.filter(todo => todo.texto.toLowerCase().includes(AddTodoState.toLowerCase()));

    function showModal() {
        let newState = !modalAddTodo;
        setModalAddTodo(newState)
    }

    function completedTodo(text) {
        let newTodoList = [...todoSingle];
        let item = newTodoList.findIndex(item => item.texto === text)
        newTodoList[item].terminado = !newTodoList[item].terminado;
        setTodosSingle(newTodoList)
    }

    function deleteTodo(text) {
        let newTodoList = [...todoSingle];
        let item = todoSingle.findIndex(item => item.texto === text);
        newTodoList.splice(item, 1)
        setTodosSingle(newTodoList);
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
                completedTodo(elemento.texto)
            }}
            onDelete={() => {
                deleteTodo(elemento.texto)
            }}
            />)
            )}
        </TodoList>
        <AddTodoBtn
            onClicked={() => {
                showModal()
            }}
        />
        <AddNewTodoModal
            currentState={modalAddTodo}
            onClose={() => {
                showModal()
            }}
        />
    </React.Fragment>)
}

export {App};