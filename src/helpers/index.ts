import { collatedTasks } from '../consts/index';
import { v4 as uuid } from 'uuid';

const isCollatedTask = (projectId: string) => collatedTasks.find(t => t.id === projectId);

const generateId = () => uuid().slice(0, 8);

export { isCollatedTask, generateId }