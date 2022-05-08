import { configureStore } from "@reduxjs/toolkit";
import tasks from '../slices/tasks';


export const store = configureStore({
    reducer: {
        tasks
    },
    // TODO: why use this
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch