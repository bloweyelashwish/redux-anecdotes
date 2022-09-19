import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from "./reducers/notificationReducer"
import filterReducer from './reducers/filterReducer'


const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        notification: notificationReducer,
        filter: filterReducer
    }
})

console.log(store.getState())

export default store