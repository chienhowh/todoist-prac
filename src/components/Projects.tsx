import React, { useContext } from 'react'
import { ProjectContext, SelectedProjectContext } from '../context'
import { IProject } from '../models';
import IndividualProject from './IndividualProject';

function Projects() {
    const { projects } = useContext(ProjectContext);
    const { selectedProject, setSelectedProject } = useContext(SelectedProjectContext);
    const selectProjectHandler = (project: IProject) => { setSelectedProject(project) }
    console.log(selectedProject)
    console.log('Projects::', projects)
    return projects.map((p: IProject) => <li key={p.projectId} onClick={() => selectProjectHandler(p)} className={`sidebar__project ${selectedProject.id === p.id ? 'active' : ''}`}>
        <div>
            <IndividualProject project={p} />
        </div></li>)
}



export default Projects