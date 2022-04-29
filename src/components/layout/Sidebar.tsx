import React from 'react'
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa'
function Sidebar() {
    return (
        <div className='sidebar'>
            <ul className='sidebar_generic'>
                <li><span>
                    <FaInbox /></span><span>Inbox</span></li>
                <li><span>
                    <FaRegCalendar /></span><span>Today</span></li>
                <li><span>
                    <FaRegCalendarAlt /></span><span>Next 7 days</span></li></ul>
            <div className='sidebar_main'>
                <span><FaChevronDown /></span>
                <h2>Projects</h2>
            </div>
            <ul className='sidebar_projects'>Projects will be here </ul>
            Here
        </div>
    )
}

export default Sidebar