import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { FB_COLLECTIONS } from '../consts';
import { SelectedProjectContext } from '../context';
import { db } from '../firebase';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { IProject, ITask } from '../models';
import { getTasks } from '../slices/tasks';
import AddTask from './AddTask';

function Task() {
    const tasks = useAppSelector((state) => state.tasks.tasks);
    const dispatch = useAppDispatch()
    const { selectedProject }: { selectedProject: IProject } = useContext(SelectedProjectContext);
    const [showAddTaskBoard, setShowAddTaskBoard] = useState(false);
    const checkTaskHandler = async (task: ITask) => {
        const taskRef = doc(db, FB_COLLECTIONS.TASKS, task.id);
        await updateDoc(taskRef, {
            isDone: !task.isDone
        });
        dispatch(getTasks(selectedProject.projectId));
    }

    const deleteTaskHandler = async (task: ITask) => {
        const taskRef = doc(db, FB_COLLECTIONS.TASKS, task.id);
        await deleteDoc(taskRef);
        dispatch(getTasks(selectedProject.projectId));
    }

    useEffect(() => {
        dispatch(getTasks(selectedProject.projectId));
    }, [dispatch, selectedProject.projectId]);

    return (
        <div className='tasks'>
            <h2>{selectedProject.name}</h2>
            <ul className='tasks__list'>
                {tasks.map(task => <li key={task.id} className={`${task.isDone ? 'done' : ''}`}>
                    <div className='checkbox-holder' onClick={() => checkTaskHandler(task)}>
                        <span className='checkbox'></span>
                    </div>
                    <span>{task.name}</span>
                    <span className='task-delete' onClick={() => deleteTaskHandler(task)}><FaTrashAlt /></span>
                </li>)}
            </ul>
            <AddTask showAddTaskBoard={showAddTaskBoard} setShowAddTaskBoard={setShowAddTaskBoard} />
        </div>
    )
}

export default Task