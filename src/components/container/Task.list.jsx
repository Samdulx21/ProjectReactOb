import React, { useEffect, useState } from 'react'
import { Task } from '../../models/Task.class'
import { LEVELS } from '../../models/Levels.enum'
import TaskComponent from '../pure/TaskComponent'

const TaskListComponent = () => {
    
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)
    
    // * Estado del componente
    const [ tasks, setTasks ] = useState( { defaultTask } )
    const [ loading, setLoeading ] = useState( false )

    // * Control de ciclo de vida del componente
    useEffect(() => {
        console.log('Modificacion de tareas "taks"')
        setLoeading(false)
    
        return () => {
            console.log('Se desapereceran la lista de  tareas "takslist"')
        }
    }, [tasks])
    

    const changeCompleted = (id) => {
        console.log('cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>Your Task:</h1>
            </div>
            {/* TODO: Aplicar un for/map para renderizar una lista  */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
}

export default TaskListComponent