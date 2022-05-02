import React from 'react'
import { useTasks } from '../hooks';
import { ITask } from '../models';

function Task() {
    const tasks: ITask[] = useTasks('1');

    let project = '';
    return (
        <div className='tasks'>
            <h2>{project}</h2>
            <ul className='task__list'>
                {tasks.map(task => <li key={task.id}>
                    <div className='checkbox-holder'>
                        <span className='checkbox'>box</span>
                    </div>
                    <span>{task.name}</span>
                </li>)}
            </ul>
        </div>
    )
}

export default Task