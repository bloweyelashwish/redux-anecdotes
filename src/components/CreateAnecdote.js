import { useDispatch } from 'react-redux'
import {appendAnecdote } from '../reducers/anecdoteReducer';
import anecdoteService from '../services/anecdotes'

const CreateAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (e) => {
        e.preventDefault()
        console.log(e.target.anecdote.value)
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(appendAnecdote(newAnecdote))
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

export default CreateAnecdote