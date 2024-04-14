import { TodoCounter } from '../TodoCounter';
import { AddTodo } from '../FilterTodo';
import { TodoList } from '../TodoList';
import { SingleTodo } from '../SingleTodo';
import { AddTodoBtn } from '../AddTodoBtn';
import { Modal } from '../Modal';
import { LoadingSpinner } from '../LoadingSpinner';
import { AddYourFirstTodo } from '../AddYourFirstTodo';
import { AppContext } from '../AppContext/index';
import { AddTodoForm } from '../AddTodoForm';
import React, { useContext } from 'react';

function AppUI() {
    let data = useContext(AppContext);

    return (<React.Fragment>
        <section className='add-section'>
        <TodoCounter/>
        <AddTodo/>
        </section>
    <TodoList>
        {data.loading && <LoadingSpinner/>}
        {data.error && <p>Hay un error</p>}
        {(!data.loading && data.todoFilter.length === 0) && <AddYourFirstTodo/>}
        {!data.loading && data.todoFilter.map(elemento => (
        <SingleTodo
        texto={elemento.texto}
        terminado={elemento.terminado}
        key={elemento.texto}
        onComplete={() => {
            data.completedTodo(elemento.texto)
        }}
        onDelete={() => {
            data.deleteTodo(elemento.texto)
        }}
        />)
        )}
    </TodoList>
    <AddTodoBtn
    isNotTodos={!data.loading && data.todoFilter.length === 0}
    onClicked={() => {
        data.showModal()
    }}/>
    {data.modalAddTodo && <Modal>
        <AddTodoForm/>
    </Modal>
    }
</React.Fragment>)
}
export {AppUI}