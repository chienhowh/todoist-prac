import React, { useContext, useState } from 'react'
import { FaChevronDown, FaChevronRight, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa'
import { COLLATED_KEYS } from '../../consts';
import { SelectedProjectContext } from '../../context';
import AddProject from '../AddProject';
import Projects from '../Projects';

const genericProjects = [
    { projectId: COLLATED_KEYS.INBOX, name: 'Inbox', icon: <FaInbox /> },
    { projectId: COLLATED_KEYS.TODAY, name: 'Today', icon: <FaRegCalendar /> },
    { projectId: COLLATED_KEYS.NEXT_7_DAYS, name: 'Next 7 days', icon: <FaRegCalendarAlt /> },
]

function Sidebar() {
    const [showProjects, setShowProjects] = useState(true);
    const { selectedProject, setSelectedProject } = useContext(SelectedProjectContext);
    const selectGenericHandler = (project: any) => {
        setSelectedProject(project)
    }
    return (
        <div className='sidebar'>
            <ul className='sidebar__generic'>
                {genericProjects.map(p => <li key={p.projectId} className={p.projectId === selectedProject.projectId ? 'active' : ''} onClick={() => selectGenericHandler(p)}>
                    <div>
                        <span> {p.icon}</span>
                        <span>{p.name}</span>
                    </div>
                </li>)}
            </ul>
            <div className='sidebar__middle' onClick={() => {
                setShowProjects(!showProjects)
            }}>
                {showProjects ? <span><FaChevronDown /></span> : <span><FaChevronRight /></span>}
                <h2>Projects</h2>
            </div>
            <ul className='sidebar__projects'>{showProjects && <Projects />}</ul>
            {showProjects && <AddProject />}
        </div>
    )
}

export default Sidebar