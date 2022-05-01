export interface Task {
    /** DD/MM/YYYY */
    data: string;
    isDone: boolean;
    name: string;
    userId: string;
    projectId: string;
    [propNams: string]: any
}
