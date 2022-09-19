import { useDispatch, useSelector } from 'react-redux'
import { voteForAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    console.log(anecdotes)

    return (
        <div>
            {
                [...anecdotes] // creating copy in order to not mutate state // The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.
                .sort((a, b) => b.votes - a.votes )
                .map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => dispatch(voteForAnecdote(anecdote.id))}>vote</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default AnecdoteList