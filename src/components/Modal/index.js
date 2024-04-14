import './addNewTodoModal.css'
import React from 'react'
import { AppContext } from '../AppContext'
function Modal({children}) {
    let {showModal: onToggle} = React.useContext(AppContext)
    return (<section className={`modal`}>
        <p className='closeModal' onClick={onToggle}>X</p>
        {children}
    </section>)
}
export {Modal}