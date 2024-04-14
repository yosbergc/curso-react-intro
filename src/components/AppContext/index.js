import React from "react";
import { useLocalStorage } from './LocalStorage';
const AppContext = React.createContext();

function TodoAppProvider({children}) {
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
    return (<AppContext.Provider value={{
        loading,
        error,
        setAddTodoState,
        newTodoState,
        setNewTodoState,
        totalCompleted,
        totalSingle,
        todoFilter,
        completedTodo,
        deleteTodo,
        onAdd,
        showModal,
        AddTodoState,
        modalAddTodo
    }}>
        {children}
    </AppContext.Provider>)
}

export {AppContext, TodoAppProvider}