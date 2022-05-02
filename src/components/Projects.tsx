import React, { useContext } from 'react'
import { ProjectContext } from '../context'

function Projects() {
    const projects = useContext(ProjectContext);
    return (
        <ul>
            {projects.map(p => <li key={p.projectId}>{p.name}</li>)}
        </ul>
    )
}

export default Projects