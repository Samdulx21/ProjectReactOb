import React, { useEffect, useState } from 'react'
import { Task } from '../../models/Task.class'
import { LEVELS } from '../../models/Levels.enum'
import TaskComponent from '../pure/TaskComponent'
import TaskForm  from '../pure/forms/TaskForm'

// * Importar hoja de estilos
import '../../styles/TaskComponent.scss'

const TaskListComponent = () => {
    
    const defaultTask1 = new Task('Example 1', 'Description 1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example 2', 'Description 2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example 3', 'Description 3', false, LEVELS.BLOCKING)
    
    // * Estado del componente
    const [ tasks, setTasks ] = useState([defaultTask1, defaultTask2, defaultTask3])
    const [ loading, setLoeading ] = useState( true )

    // * Control de ciclo de vida del componente
    useEffect(() => {
        console.log('Modificacion de tareas "taks"')
        setLoeading(false)
    
        return () => {
            console.log('Se desapereceran la lista de  tareas "takslist"')
        }
    }, [tasks])

    //* UPDATE
    function completedTask(task) {
        console.log('Completed this task:', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks[index].completed = !tempTasks[index].completed
        //* We update the state of the component witch the new list of tasks and it will update the
        //* iteration of the tasks in order to show the tasks update 
        setTasks(tempTasks)
    }

    //* DELETE
    function deleteTask(task) {
        console.log('Delete this task:', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.splice(index, 1)
        setTasks(tempTasks)
    }

    //* AGGREGATE
    function addTask(task) {
        console.log('Delete this task:', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.push(task)
        setTasks(tempTasks)
    }

    return (
        <div>
            <div className='col-19'>
                <div className='card'>
                    {/* Card Header TITLE */}
                    <div className='card-header p-3'>
                            <h5>Your Task:</h5>
                    </div>
                    {/* Card body CONTENT */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tasks.map((task, index) => {
                                    return(
                                        <TaskComponent 
                                        key={index} 
                                        task={task} 
                                        complete={completedTask}
                                        remove={deleteTask} ></TaskComponent>
                                    )
                                }) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
                <TaskForm add={addTask}></TaskForm>
            {/* Iterar sobre una lista de tareas */}
            {/* TODO: Aplicar un for/map para renderizar una lista  */}
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    )
}

export default TaskListComponent