import { addDoc, collection } from 'firebase/firestore';
import React, { useContext, useRef, useState } from 'react'
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { FB_COLLECTIONS } from '../consts';
import { SelectedProjectContext } from '../context';
import { db } from '../firebase';
import { useAppDispatch } from '../hooks/hooks';
import { IProject } from '../models';
import { getTasks } from '../slices/tasks';
import ProjectOverlay from './ProjectOverlay';
import TaskDate from './TaskDate';
interface Props {
    isShowAddTaskBtn?: boolean;
    showAddTaskBoard: boolean;
    setShowAddTaskBoard: (isShowAddTaskBoard: boolean) => void
}

function AddTask({ showAddTaskBoard, setShowAddTaskBoard, isShowAddTaskBtn = true }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch()
    const { selectedProject }: { selectedProject: IProject } = useContext(SelectedProjectContext);
    /** add task to selected project */
    const [project, setProject] = useState<IProject>();
    const [showProjectOverlay, setShowProjectOverlay] = useState(false);
    // date start
    const [showTaskDate, setShowTaskDate] = useState<boolean>(false);
    const [taskDate, setTaskDate] = useState<string>();
    // refresh Tasks
    // const { selectedProject }: { selectedProject: IProject } = useContext(SelectedProjectContext);
    // const { fetchData } = useTasks(selectedProject.projectId);
    const addTask = async () => {
        if (!inputRef.current?.value || !taskDate || !project) { return; }
        const projectId = project?.projectId;
        const requestBody = {
            name: inputRef.current.value,
            date: taskDate,
            projectId,
            userId: 'E8RT0a1RVfbpFSYnguX6',
            isDone: false
        }
        await addDoc(collection(db, FB_COLLECTIONS.TASKS), requestBody);
        setProject(undefined);
        setTaskDate(undefined);
        setShowAddTaskBoard(false);
        setShowProjectOverlay(false);
        setShowTaskDate(false);
        dispatch(getTasks(selectedProject.projectId));
    }
    return (
        <div className={`add-task ${showAddTaskBoard ? 'add-task__overlay' : ''}`}
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
                        <div className="quick-add-task">
                            <h2 className="header">Quick Add Task</h2>
                            <span
                                className="add-task__cancel-x"
                                onClick={() => {
                                    setShowProjectOverlay(false);
                                    setShowTaskDate(false);
                                    setShowAddTaskBoard(false);
                                }}
                            >
                                X
                            </span>
                        </div>
                    </>
                    {(project || taskDate) && <div style={{ margin: '8px 0px' }}><span style={{ marginRight: '8px' }}>{project?.name}</span>{taskDate}</div>}
                    <ProjectOverlay setProject={setProject} showProjectOverlay={showProjectOverlay} setShowProjectOverlay={setShowProjectOverlay} />
                    <TaskDate showTaskDate={showTaskDate} setShowTaskDate={setShowTaskDate} setTaskDate={setTaskDate} />
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

                    <span
                        className="add-task__cancel"
                        onClick={() => setShowAddTaskBoard(!showAddTaskBoard)}
                        tabIndex={0}
                        role="button"
                    >
                        Cancel
                    </span>

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