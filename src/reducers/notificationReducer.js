import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: 'Hello',
    reducers: {
        notify(state, action) {
            return action.payload
        }
    }
})

export const { notify } = notificationSlice.actions
export default notificationSlice.reducer