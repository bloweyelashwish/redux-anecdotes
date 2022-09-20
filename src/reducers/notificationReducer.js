import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        notify(state, action) {
            return action.payload
        },
        removeNotification() {
            return null
        }
    }
})

export const { notify, removeNotification } = notificationSlice.actions

export const newNotification = (string, time) => {
    return async dispatch => {
        dispatch(notify(string))

        if (time === null) {
            dispatch(removeNotification())
        }

        const timeout = setTimeout(() => {
            dispatch(removeNotification())
        }, time * 1000)
    }
}

export default notificationSlice.reducer