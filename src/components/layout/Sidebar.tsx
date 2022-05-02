import React, { useContext, useState } from 'react'
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa'
import { COLLATED_KEYS } from '../../consts';
import { SelectedProjectContext } from '../../context';
import AddProject from '../AddProject';
import Projects from '../Projects'
function Sidebar() {
    const [showProjects, setShowProjects] = useState(true);
    const { setSelectedProject } = useContext(SelectedProjectContext);
    const selectGenericHandler = (key: COLLATED_KEYS) => {
        setSelectedProject(key)
    }
    return (
        <div className='sidebar'>
            <ul className='sidebar__generic'>
                <li className='inbox' onClick={() => selectGenericHandler(COLLATED_KEYS.INBOX)}>
                    <div><span>

                        <FaInbox /></span><span>Inbox</span></div></li>
                <li className='today' onClick={() => selectGenericHandler(COLLATED_KEYS.TODAY)}>
                    <div> <span>

                        <FaRegCalendar /></span><span>Today</span>
                    </div></li>
                <li className='next_7' onClick={() => selectGenericHandler(COLLATED_KEYS.NEXT_7_DAYS)}>
                    <div><span>
                        <FaRegCalendarAlt /></span><span>Next 7 days</span>
                    </div> </li>
            </ul>
            <div className='sidebar__middle' onClick={() => {
                setShowProjects((prev) => !prev)
            }}>
                <span><FaChevronDown /></span>
                <h2>Projects</h2>
            </div>
            <ul className='sidebar__projects'>{showProjects && <Projects />}</ul>
            {showProjects && <AddProject />}
        </div>
    )
}

export default Sidebar