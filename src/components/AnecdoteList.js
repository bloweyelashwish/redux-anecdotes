import { useDispatch, useSelector } from 'react-redux'
import { vote } from "../reducers/anecdoteReducer";
import { newNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        if (state.filter == null) {
            return state.anecdotes
        }

        return state.anecdotes.filter(item => item.content.toLowerCase().includes(state.filter.toLowerCase()))
    })

    const handleVote = ({ content, id }) => {
        dispatch(newNotification(`Voted for '${content}'`, 5))
        dispatch(vote(id))
    }

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
                            <button onClick={() => handleVote(anecdote)}>vote</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default AnecdoteList