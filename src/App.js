import CreateAnecdote from './components/CreateAnecdote'
import AnecdoteList from "./components/AnecdoteList";

const App = () => {
  return (
    <div>
        <AnecdoteList />
        <CreateAnecdote />
    </div>
  )
}

export default App