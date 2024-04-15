import './addNewTodoModal.css'
import React from 'react'
import ReactDOM from 'react-dom';
import { AppContext } from '../AppContext'
function Modal({children}) {
    let {showModal: onToggle} = React.useContext(AppContext)
    return (ReactDOM.createPortal(<section className={`modal`}>
    <p className='closeModal' onClick={onToggle}>X</p>
    {children}
</section>, document.getElementById('modalContainer')))}
export {Modal}