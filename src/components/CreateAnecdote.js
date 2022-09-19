import { useDispatch } from 'react-redux'
import { createAnecdote } from "../reducers/anecdoteReducer";

const CreateAnecdote = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = (e) => {
        e.preventDefault()
        console.log(e.target.anecdote.value)
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(createAnecdote(content))
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