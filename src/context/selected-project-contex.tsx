import React, { useState } from 'react';
import { createContext } from "react";
import { COLLATED_KEYS } from '../consts';


export const SelectedProjectContext = createContext<any>(null);

export const SelectedProjectProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedProject, setSelectedProject] = useState({ projectId: COLLATED_KEYS.INBOX, name: 'Inbox' });
    return (<SelectedProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
        {children}
    </SelectedProjectContext.Provider>)
}