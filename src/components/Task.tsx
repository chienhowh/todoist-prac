import { doc, updateDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { FB_COLLECTIONS } from '../consts';
import { SelectedProjectContext } from '../context';
import { db } from '../firebase';
import { useTasks } from '../hooks';
import { IProject, ITask } from '../models';
import AddTask from './AddTask';

function Task() {
    const { selectedProject }: { selectedProject: IProject } = useContext(SelectedProjectContext);
    const { tasks, fetchData } = useTasks(selectedProject.projectId);
    const [showAddTaskBoard, setShowAddTaskBoard] = useState(false);
    const checkTask = async (task: ITask) => {
        const taskRef = doc(db, FB_COLLECTIONS.TASKS, task.id);
        await updateDoc(taskRef, {
            isDone: !task.isDone
        });
        fetchData();
    }
    console.log('tasks::', tasks)
    return (
        <div className='tasks'>
            <h2>{selectedProject.name}</h2>
            <ul className='tasks__list'>
                {tasks.map(task => <li key={task.id} className={`${task.isDone ? 'done' : ''}`}>
                    <div className='checkbox-holder' onClick={() => checkTask(task)}>
                        <span className='checkbox'></span>
                    </div>
                    <span>{task.name}</span>
                    <span className='task-delete'><FaTrashAlt /></span>
                </li>)}
            </ul>
            <AddTask showAddTaskBoard={showAddTaskBoard} setShowAddTaskBoard={setShowAddTaskBoard} refreshData={fetchData} />
        </div>
    )
}

export default Task