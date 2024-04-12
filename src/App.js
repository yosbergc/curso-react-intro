import { TodoCounter } from './components/TodoCounter';
import { AddTodo } from './components/FilterTodo';
import { TodoList } from './components/TodoList';
import { SingleTodo } from './components/SingleTodo';
import { AddTodoBtn } from './components/AddTodoBtn';
import { AddNewTodoModal } from './components/AddNewTodoModal';
import React from 'react';
import './App.css'

function useLocalStorage() {
    const taskDB = localStorage.getItem('TasksDB');
    let taskState;
    if (!taskDB) {
        localStorage.setItem('TasksDB', JSON.stringify([]));
        taskState = JSON.parse(taskDB)
    } else {
        taskState = JSON.parse(taskDB)
    }
    let [item, setItem] = React.useState(taskState)

    function updateTodoDB(newTodoList) {
        setItem(newTodoList)
        localStorage.setItem('TasksDB', JSON.stringify(newTodoList))
    }
    return [item, updateTodoDB];
}
function App() {
    let [todoSingle, updateTodoDB] = useLocalStorage()
    let [AddTodoState, setAddTodoState] = React.useState('');
    let [modalAddTodo, setModalAddTodo] = React.useState(false);
    let [newTodoState, setNewTodoState] = React.useState('');
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
        updateTodoDB(newTodoList)
    }
    function deleteTodo(text) {
        let newTodoList = [...todoSingle];
        let item = todoSingle.findIndex(item => item.texto === text);
        newTodoList.splice(item, 1)
        updateTodoDB(newTodoList)
    }
    function onAdd(text) {
        let newTodoList = [...todoSingle];
        let item = {texto: text, completado: false};
        newTodoList.push(item);
        updateTodoDB(newTodoList)
        showModal()
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
        {modalAddTodo && <AddNewTodoModal
            onToggle={() => {
                showModal()
            }}
            onAdd={() => {
                onAdd(newTodoState)
            }}
            newTodoInputChangeState={setNewTodoState}
        />}
    </React.Fragment>)
}

export {App};