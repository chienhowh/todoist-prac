import React, { useContext } from 'react'
import { ProjectContext } from '../context'
import IndividualProject from './IndividualProject';

function Projects() {
    const projects = useContext(ProjectContext);
    return (
        <>{projects.map(p => <li key={p.projectId} className="sidebar__project">
            <div>
                <IndividualProject project={p} />
            </div></li>)}
        </>
    )
}

export default Projects