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
export default notificationSlice.reducer