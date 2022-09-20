import { connect } from "react-redux";
import { setFilter } from '../reducers/filterReducer'

const AnecdotesFilter = (props) => {
    const handleFilterChange = (e) => {
        props.setFilter(e.target.value)
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

const mapDispatchToProps = {
    setFilter
}

const connectedAnecdotesFilter = connect(null, mapDispatchToProps)(AnecdotesFilter)

export default connectedAnecdotesFilter