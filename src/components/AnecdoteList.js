import { connect } from 'react-redux'
import { vote } from "../reducers/anecdoteReducer";
import { newNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const handleVote = ({ content, id }) => {
        props.newNotification(`Voted for '${content}'`, 5)
        props.vote(id)
    }

    return (
        <div>
            {
                [...props.anecdotes] // creating copy in order to not mutate state // The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.
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

const mapStateToProps = (state) => {
    if (state.filter === null) {
        return {
            anecdotes: state.anecdotes
        }
    }
    return { anecdotes: state.anecdotes.filter(item => item.content.toLowerCase().includes(state.filter.toLowerCase())) }
}

const mapDispatchToProps = {
    newNotification,
    vote
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList