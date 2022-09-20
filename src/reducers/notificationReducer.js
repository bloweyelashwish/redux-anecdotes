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


let timeout // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#setting_and_clearing_timeouts
export const newNotification = (string, time) => {
    return async dispatch => {
        dispatch(notify(string))

        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            dispatch(removeNotification())
        }, time * 1000)
    }
}

export default notificationSlice.reducer