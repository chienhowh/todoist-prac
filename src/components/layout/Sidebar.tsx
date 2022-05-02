import React from 'react'
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa'
function Sidebar() {
    return (
        <div className='sidebar'>
            <ul className='sidebar__generic'>
                <li className='inbox'><span>
                    <FaInbox /></span><span>Inbox</span></li>
                <li className='today'><span>
                    <FaRegCalendar /></span><span>Today</span></li>
                <li className='next_7'><span>
                    <FaRegCalendarAlt /></span><span>Next 7 days</span></li></ul>
            <div className='sidebar__middle'>
                <span><FaChevronDown /></span>
                <h2>Projects</h2>
            </div>
            <ul className='sidebar__projects'>Projects will be here </ul>
            Here
        </div>
    )
}

export default Sidebar