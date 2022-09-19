import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CreateAnecdote from './components/CreateAnecdote'
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import AnecdotesFilter from "./components/AnecdotesFilter";
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        anecdoteService.getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
    }, [dispatch])

  return (
    <div>
        <Notification />
        <AnecdotesFilter />
        <AnecdoteList />
        <CreateAnecdote />
    </div>
  )
}

export default App