import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'
import {notify, removeNotification} from "./notificationReducer";

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteForAnecdote(state, action) {
      const id = action.payload
      const forVote = state.find(item => item.id === id)
      const changedAnecdote = {
        ...forVote,
        votes: forVote.votes + 1
      }
      return state.map(item => item.id !== id ? item : changedAnecdote)
    },
    appendAnecdote(state, action) {
      return [...state, action.payload]
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { voteForAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const vote = (id) => {
  return async (dispatch, getState) => {
    const { anecdotes } = getState()

    const forVote = anecdotes.find(el => el.id === id)
    const changedAnecdote = {
      ...forVote,
      votes: forVote.votes + 1
    }
    const response = await anecdoteService.update(id, changedAnecdote)
    dispatch(voteForAnecdote(id))
  }
}

export default anecdoteSlice.reducer
