import { useState, useEffect } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from '../firebase';
import { COLLATED_KEYS, FB_COLLECTIONS, FB_KEYS, TEST } from "../consts";
import { isCollatedTask } from "../helpers";
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { IProject, ITask } from "../models";
dayjs.extend(isBetween)
/** get project's tasks by projectId */
const useTasks = (projectId: string) => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    useEffect(() => {
        const tasksRef = collection(db, FB_COLLECTIONS.TASKS);
        // get all tasks
        const fetchData = async () => {
            // TODO: 是否能夠分開chain
            let unsub = query(tasksRef, where(FB_KEYS.USERID, "==", TEST.userId));
            if (isCollatedTask(projectId)) {
                switch (projectId) {
                    case COLLATED_KEYS.INBOX:
                    case COLLATED_KEYS.NEXT_7_DAYS:
                        unsub = query(tasksRef, where(FB_KEYS.USERID, "==", TEST.userId));
                        break;
                    case COLLATED_KEYS.TODAY:
                        unsub = query(tasksRef, where(FB_KEYS.USERID, "==", TEST.userId), where(FB_KEYS.DATE, "==", dayjs().format('DD/MM/YYYY')));
                        break;
                }

            } else {
                unsub = query(tasksRef, where(FB_KEYS.USERID, "==", TEST.userId), where(FB_KEYS.PROJECTID, "==", projectId));
            }
            const querySnapshot = await getDocs(unsub);
            const result: ITask[] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as unknown as ITask))
            setTasks(() => {
                if (projectId === COLLATED_KEYS.NEXT_7_DAYS) {
                    return result.filter(t => dayjs(t.date).isBetween(dayjs(), dayjs().add(7, 'day'), null, '(]'));
                }
                return result;
            })
        }
        fetchData();
    }, [projectId]);
    return tasks;
}

const useProjects = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    console.log('useProject hooks', projects);

    useEffect(() => {
        const projectRef = collection(db, FB_COLLECTIONS.PROJECTS);
        const fetchData = async () => {
            let unsub = query(projectRef, where(FB_KEYS.USERID, "==", TEST.userId));
            const querySnapshot = await getDocs(unsub);
            const result: IProject[] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as unknown as IProject))
            setProjects(() => result)
        }
        fetchData();
    }, [projects.length])
    return { projects, setProjects };
}

export { useTasks, useProjects }