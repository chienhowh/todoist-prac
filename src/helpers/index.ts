import { collatedTasks } from '../consts/index';
const isCollatedTask = (projectId: string) => collatedTasks.find(t => t.id === projectId);


export { isCollatedTask }