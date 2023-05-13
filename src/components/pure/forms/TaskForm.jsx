import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/Levels.enum'
import { Task } from '../../../models/Task.class'

const TaskForm = ({ add, length }) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    function addTask(e) {
        e.preventDefault()
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    //* Styles
    const normalStyle = {
        backgroundColor: 'blue',
        color: 'white',
        fontWeight: 'bold',
    }

    const urgentStyle = {
        backgroundColor: 'yellow',
        color: 'black',
        fontWeight: 'bold',
    }

    const blockingStyle = {
        backgroundColor: 'red',
        color: 'white',
        fontWeight: 'bold',
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task name' />

                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task description' />

                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' className='form-control form-control-lg'>
                    <option style={normalStyle} value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option style={urgentStyle} value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option style={blockingStyle} value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
                
                <button type='submit' className='btn btn-success btn-lg mg-2'>
                { length > 0 ? 'Add New Task' : 'Create Your First Task' }
                </button>
            </div>
        </form>
    )
}

TaskForm.protoTyps = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
}

export default TaskForm