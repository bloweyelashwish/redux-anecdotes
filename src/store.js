import { configureStore } from "@reduxjs/toolkit";
import anecdoteService from './services/anecdotes'
import anecdoteReducer, {setAnecdotes} from './reducers/anecdoteReducer'
import notificationReducer from "./reducers/notificationReducer"
import filterReducer from './reducers/filterReducer'


const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        notifications: notificationReducer,
        filter: filterReducer
    }
})

anecdoteService.getAll().then(anecdotes => setAnecdotes(anecdotes))

console.log(store.getState())

export default store