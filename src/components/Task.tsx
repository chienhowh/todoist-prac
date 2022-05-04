import React, { useContext } from 'react'
import { SelectedProjectContext } from '../context';
import { useTasks } from '../hooks';
import { IProject, ITask } from '../models';
import AddTask from './AddTask';

function Task() {
    const { selectedProject }: { selectedProject: IProject } = useContext(SelectedProjectContext);
    const tasks: ITask[] = useTasks(selectedProject.projectId);
    console.log(selectedProject);

    return (
        <div className='tasks'>
            <h2>{selectedProject.name}</h2>
            <ul className='tasks__list'>
                {tasks.map(task => <li key={task.id}>
                    <div className='checkbox-holder'>
                        <span className='checkbox'></span>
                    </div>
                    <span>{task.name}</span>
                </li>)}
            </ul>
            <AddTask />
        </div>
    )
}

export default Task