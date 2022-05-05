import { addDoc, collection } from 'firebase/firestore';
import React, { useRef, useState } from 'react'
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { FB_COLLECTIONS } from '../consts';
import { db } from '../firebase';
import { generateId } from '../helpers';
import { IProject } from '../models';
import ProjectOverlay from './ProjectOverlay';
interface Props {
    isShowAddTaskBtn?: boolean;
    isShowAddTaskBoard?: boolean;
}

function AddTask({ isShowAddTaskBoard = false, isShowAddTaskBtn = true }: Props) {
    const [showAddTaskBoard, setShowAddTaskBoard] = useState(isShowAddTaskBoard)
    const inputRef = useRef<HTMLInputElement>(null);
    // add task to which project
    const [project, setProject] = useState<IProject>();
    const [showProjectOverlay, setShowProjectOverlay] = useState(false);
    const [showTaskDate, setShowTaskDate] = useState(false);

    const addTask = async () => {
        if (!inputRef.current?.value) { return; }
        const projectId = project?.projectId;
        // let collatedDate = '';
        // if (projectId === 'TODAY') {
        //     collatedDate = moment().format('DD/MM/YYYY');
        // } else if (projectId === 'NEXT_7') {
        //     collatedDate = moment().add(7, 'days').format('DD/MM/YYYY');
        // }
        const requestBody = {
            name: inputRef.current.value,
            date: '',
            projectId,
            userId: 'E8RT0a1RVfbpFSYnguX6',
            isDone: false
        }
        console.log(requestBody);
        await addDoc(collection(db, FB_COLLECTIONS.TASKS), requestBody);
        setProject(undefined);
        setShowAddTaskBoard(false);
        setShowProjectOverlay(false);

    }
    return (
        <div
        >
            {/* addTask btn */}
            {isShowAddTaskBtn && (
                <div
                    className="add-task__shallow"
                    data-testid="show-main-action"
                    onClick={() => setShowAddTaskBoard(!showAddTaskBoard)}
                >
                    <span className="add-task__plus">+</span>
                    <span className="add-task__text">Add Task</span>
                </div>
            )}
            {/* addTask board */}
            {showAddTaskBoard && (
                <div className="add-task__main" >
                    <>
                        <div data-testid="quick-add-task">
                            <h2 className="header">Quick Add Task</h2>
                            <span
                                className="add-task__cancel-x"
                                data-testid="add-task-quick-cancel"
                                aria-label="Cancel adding task"
                            >
                                X
                            </span>
                        </div>
                    </>
                    <ProjectOverlay setProject={setProject} showProjectOverlay={showProjectOverlay} setShowProjectOverlay={setShowProjectOverlay} />
                    <p>date here</p>
                    <input
                        className="add-task__content"

                        type="text"
                        ref={inputRef}
                    />
                    <button
                        type="button"
                        className="add-task__submit"
                        data-testid="add-task"
                        onClick={() => {
                            addTask();
                        }}
                    >
                        Add Task
                    </button>
                    {
                        <span
                            className="add-task__cancel"
                            onClick={() => setShowAddTaskBoard(!showAddTaskBoard)}
                            tabIndex={0}
                            role="button"
                        >
                            Cancel
                        </span>
                    }
                    <span
                        className="add-task__project"

                        onClick={() => setShowProjectOverlay(!showProjectOverlay)}

                        tabIndex={0}
                        role="button"
                    >
                        <FaRegListAlt />
                    </span>
                    <span
                        className="add-task__date"
                        onClick={() => setShowTaskDate(!showTaskDate)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') setShowTaskDate(!showTaskDate);
                        }}
                        tabIndex={0}
                        role="button"
                    >
                        <FaRegCalendarAlt />
                    </span>
                </div>
            )}
        </div>
    )
}

export default AddTask