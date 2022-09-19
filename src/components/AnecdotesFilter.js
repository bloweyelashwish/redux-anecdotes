import { useDispatch } from "react-redux";
import { setFilter } from '../reducers/filterReducer'

const AnecdotesFilter = () => {
    const dispatch = useDispatch()

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value))
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter: <input onChange={handleFilterChange} />
        </div>
    )
}

export default AnecdotesFilter