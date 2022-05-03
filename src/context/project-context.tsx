import React, { useState } from 'react';
import { createContext } from "react";
import { useProjects } from "../hooks";
import { IProject } from '../models';

interface Context {
    projects: IProject[];
    setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}


export const ProjectContext = createContext<any>({});


export const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
    const { projects, setProjects } = useProjects();
    console.log('projectProvider');

    return (<ProjectContext.Provider value={{ projects, setProjects }}>
        {children}
    </ProjectContext.Provider>)
}