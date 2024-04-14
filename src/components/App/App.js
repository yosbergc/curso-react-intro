import { AppUI } from './AppUI';
import React from 'react';
import './App.css'
import { TodoAppProvider } from '../AppContext';

function App() {
    return (<TodoAppProvider>
        <AppUI/>
    </TodoAppProvider>)
}

export {App};