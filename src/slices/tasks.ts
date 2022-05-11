import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import dayjs from "dayjs";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { FB_COLLECTIONS, FB_KEYS, TEST, COLLATED_KEYS } from "../consts";
import { db } from "../firebase";
import { isCollatedTask } from "../helpers";
import { ITask } from "../models";
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
export const getTasks = createAsyncThunk(
    'tasks/getTasks',
    async (projectId: string) => {
        const tasksRef = collection(db, FB_COLLECTIONS.TASKS);
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
        return getDocs(unsub);
    }
)



interface TasksState {
    tasks: ITask[]
    status: null | 'pending' | 'succeeded' | 'failed'
}

const initialState: TasksState = {
    tasks: [],
    status: null,
}

// Then, handle actions in your reducers:
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getTasks.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(getTasks.fulfilled, (state, action) => {
            let result: ITask[] = action.payload.docs.map(doc => ({ id: doc.id, ...doc.data() } as unknown as ITask))
            const projectId = action.meta.arg;
            if (projectId === COLLATED_KEYS.NEXT_7_DAYS) {
                result = result.filter(t => dayjs(t.date, 'DD/MM/YYYY').isBetween(dayjs(), dayjs().add(7, 'day'), null, '(]'));
            }
            state.status = 'succeeded';
            state.tasks = result;
        })
        builder.addCase(getTasks.rejected, (state) => {
            state.status = 'failed';
        })
    },
})

export default tasksSlice.reducer;