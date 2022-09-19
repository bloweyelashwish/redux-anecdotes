import CreateAnecdote from './components/CreateAnecdote'
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import AnecdotesFilter from "./components/AnecdotesFilter";

const App = () => {
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