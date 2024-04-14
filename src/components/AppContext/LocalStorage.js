import React from 'react';

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
            setLoading(false)
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

export {useLocalStorage}