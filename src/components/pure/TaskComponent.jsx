import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

//* Modelos
import { Task } from '../../models/Task.class'
import { LEVELS } from '../../models/Levels.enum'

// * Importamos la hoja de estilo
import '../../styles/TaskComponent.scss'

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Tarea creada')
    
        return () => {
            console.log(`task: ${task.name} se esta desapareciendo`)
        }
    }, [task])
    
    /**
    ** Function that returns a badge
    ** depending on the level of the task
    */ 
    function taskLevelbadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            { task.level }
                        </span>
                    </h6>
                )

            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            { task.level }
                        </span>
                    </h6>
                )

            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            { task.level }
                        </span>
                    </h6>
                )
            
            default:
                break;
        }
    }

    /**
     * * Function that returns icon depending on completion of the task 
     */ 
    function taskIconCompleted(){
        if (task.completed) {
            return ( <i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i>  )
        } else {
            return (  <i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{ color: 'grey' }}></i> )
        }
    }

    //* Style 
    const taskCompleted = {
        color: 'grey',
        textDecoration: 'line-through',
    }
    
    const taskPending = {
        fontWeight: 'bold',
        color: 'coral',
    }
    
    return (

        <tr className='fw-normal' style={ task.completed ? taskCompleted : taskPending }>
            <th>
                <span className='ms-2'>
                    { task.name }
                </span>
            </th>
            <td className='align-middle'>
                <span>
                    { task.description }
                </span>
            </td>
            <td className='align-middle'>
                {/* Execution of function to return badge element */}
                { taskLevelbadge() }
            </td>
            <td>
                <span className='align-middle'>
                    {/* Execution of function to return icon depending on completed */}
                    { taskIconCompleted() }

                    <i className='bi-trash task-action' style={{ color: 'tomato'}} onClick={() => remove(task)}></i>
                </span>
            </td>
        </tr>


        // <div>
        //     <h2 className='task-name'>
        //         Nombre: { task.name }
        //     </h2>
        //     <h3>
        //         Descripción: { task.description }
        //     </h3>
        //     <h4>
        //         Level: { task.level }
        //     </h4>
        //     <h5>
        //         This task is: { task.completed ? 'COMPLETED' : 'PENDING' }
        //     </h5>
        // </div>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}

export default TaskComponent