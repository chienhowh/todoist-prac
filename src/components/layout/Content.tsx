import React from 'react'
import Task from '../Task'
import Sidebar from './Sidebar'

function Content() {
    return (
        <section className='content'>
            <Sidebar />
            <Task />
        </section>
    )
}

export default Content