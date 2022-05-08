export interface ITask {
    /** DD/MM/YYYY */
    date: string;
    isDone: boolean;
    name: string;
    userId: string;
    projectId: string;
    [propNams: string]: any
}

export interface IProject {
    name: string;
    projectId: string;
    userId: string;
    [propNams: string]: any
}
