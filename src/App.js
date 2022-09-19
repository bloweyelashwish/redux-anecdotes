import CreateAnecdote from './components/CreateAnecdote'
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";

const App = () => {
  return (
    <div>
        <Notification />
        <AnecdoteList />
        <CreateAnecdote />
    </div>
  )
}

export default App