import { TodoCounter } from './components/TodoCounter';
import { AddTodo } from './components/FilterTodo';
import { TodoList } from './components/TodoList';
import { SingleTodo } from './components/SingleTodo';
import { AddTodoBtn } from './components/AddTodoBtn';
import { AddNewTodoModal } from './components/AddNewTodoModal';
import { LoadingSpinner } from './components/LoadingSpinner';
import { AddYourFirstTodo } from './components/AddYourFirstTodo';
import React from 'react';
import './App.css'

function useLocalStorage(initialValue) {
    let [item, setItem] = React.useState(initialValue)
    let [loading, setLoading] = React.useState(true);
    let [error, setError] = React.useState(false);

    React.useEffect(() => {
        try {
            const taskDB = localStorage.getItem('TasksDB');
            let taskState;

            if (!taskDB) {
                localStorage.setItem('TasksDB', JSON.stringify(initialValue));
                taskState = JSON.parse(taskDB)
            } else {
                taskState = JSON.parse(taskDB)
                setItem(taskState)
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }, [])

    function updateTodoDB(newTodoList) {
        setItem(newTodoList)
        localStorage.setItem('TasksDB', JSON.stringify(newTodoList))
    }
    return {
        item,
        updateTodoDB,
        loading,
        error
    };
}
function App() {
    let {item: todoSingle, updateTodoDB, loading, error} = useLocalStorage([])
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
            {loading && <LoadingSpinner/>}
            {error && <p>Hay un error</p>}
            {(!loading && todoFilter.length === 0) && <AddYourFirstTodo/>}
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
            isNotTodos={!loading && todoFilter.length === 0}
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