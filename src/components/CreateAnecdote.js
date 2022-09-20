import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer';

const CreateAnecdote = (props) => {

    const addAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        props.createAnecdote(content)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input type="text" name="anecdote" /></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    createAnecdote
}

const ConnectedAnecdote = connect(null, mapDispatchToProps)(CreateAnecdote)

export default ConnectedAnecdote