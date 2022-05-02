import React from 'react';
import { createContext } from "react";
import { useProjects } from "../hooks";
import { IProject } from '../models';

export const ProjectContext = createContext<IProject[]>([]);


export const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
    const projects = useProjects();
    return (<ProjectContext.Provider value={projects}>
        {children}
    </ProjectContext.Provider>)
}