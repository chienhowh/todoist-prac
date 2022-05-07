import React, { useContext, useState } from 'react'
import { BsSunrise, BsSunset } from "react-icons/bs";
import { SelectedProjectContext } from '../../context';
import { useTasks } from '../../hooks';
import { IProject } from '../../models';
import AddTask from '../AddTask';

interface Props {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
}

function Header({ isDarkMode, setIsDarkMode }: Props) {
    const [showAddTaskBoard, setShowAddTaskBoard] = useState(false);
    const { selectedProject }: { selectedProject: IProject } = useContext(SelectedProjectContext);
    const { fetchData } = useTasks(selectedProject.projectId);
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Todoist" />
                </div>
                <div className="settings">
                    <ul>
                        <li className="settings__add">
                            <button
                                data-testid="quick-add-task-action"
                                aria-label="Quick add task"
                                type="button"
                                onClick={() => setShowAddTaskBoard(!showAddTaskBoard)}
                            >
                                +
                            </button>
                        </li>
                        <li className="settings__darkmode">
                            <button
                                aria-label="Darkmode on/off"
                                type="button"
                                onClick={() => setIsDarkMode(!isDarkMode)}
                            >
                                {isDarkMode ? <BsSunrise /> : <BsSunset />}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <AddTask isShowAddTaskBtn={false} setShowAddTaskBoard={setShowAddTaskBoard} showAddTaskBoard={showAddTaskBoard} refreshData={fetchData} />

        </header>
    )
}

export default Header