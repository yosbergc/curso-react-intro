import './TodoCounter.css'
import { AppContext } from '../AppContext/index'
import React, { useContext } from 'react'
function TodoCounter() {
    let data = useContext(AppContext);
    let mensaje;
    if (data.totalCompleted === data.totalSingle && data.totalCompleted !== 0 && data.totalSingle !== 0) {
        mensaje = "Felicitaciones, has completado todas las tareas"
    } else if (data.totalSingle === 0 && data.totalCompleted === 0) {
        mensaje = "No hay tareas"
    } else {
        mensaje = `Has completado ${data.totalCompleted} de ${data.totalSingle} tareas`
    }
    return (<section>
        <h1 className='todoCounterH1'>{mensaje}</h1>
    </section>)
}
export {TodoCounter};