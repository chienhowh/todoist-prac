import React, { useContext } from 'react'
import { ProjectContext } from '../context';
import { IProject } from '../models';
interface Props {
    showProjectOverlay: boolean;
    setProject: (project: IProject) => void;
    setShowProjectOverlay: (isShow: boolean) => void;
}

function ProjectOverlay({ setProject, showProjectOverlay, setShowProjectOverlay }: Props) {
    const { projects } = useContext(ProjectContext);
    return (
        projects && showProjectOverlay && (<div className="project-overlay">
            <ul className="project-overlay__list">{projects.map((p: IProject) => (
                <li key={p.projectId}>
                    <div
                        onClick={() => {
                            setShowProjectOverlay(false);
                            setProject(p);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setShowProjectOverlay(false);
                                setProject(p);
                            }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label="Select the task project"
                    >
                        {p.name}
                    </div>
                </li>
            ))}</ul>

        </div>)
    )
}

export default ProjectOverlay