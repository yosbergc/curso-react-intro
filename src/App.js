import { TodoCounter } from './TodoCounter';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';
import { SingleTodo } from './SingleTodo';
import { AddTodoBtn } from './AddTodoBtn';
import { AddNewTodoModal } from './AddNewTodoModal';
import React from 'react';
import './App.css'

function App() {
    // Agregamos la BD en localStorage
    const taskDB = localStorage.getItem('TasksDB');
    let taskState;
    if (!taskDB) {
        localStorage.setItem('TasksDB', JSON.stringify([]));
        taskState = JSON.parse(taskDB)
    } else {
        taskState = JSON.parse(taskDB)
    }
    // Nos encargamos de los estados y los estados compuestos.
    let [todoSingle, setTodosSingle] = React.useState(taskState);
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
        localStorage.setItem('TasksDB', JSON.stringify(newTodoList))
    }
    function deleteTodo(text) {
        let newTodoList = [...todoSingle];
        let item = todoSingle.findIndex(item => item.texto === text);
        newTodoList.splice(item, 1)
        setTodosSingle(newTodoList);
        localStorage.setItem('TasksDB', JSON.stringify(newTodoList))
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