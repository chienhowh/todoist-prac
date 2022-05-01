export interface Task {
    /** DD/MM/YYYY */
    data: string;
    isDone: boolean;
    name: string;
    userId: string;
    projectId: string;
    [propNams: string]: any
}

export interface Project {
    name: string;
    projectId: string;
    userId: string;
    [propNams: string]: any
}
