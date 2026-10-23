import { createSlice } from "@reduxjs/toolkit";

const User = createSlice({
name: "User",
initialState: {
User: [],
SavedUsers: []
},
reducers: {
setUser: (state, action) => {
state.User = [...state.User, ...action.payload]
},
savedUsers: (state, action) => {
    const exists = state.SavedUsers.filter(st => st.email === action.payload.email)

    if (exists.length === 0) {
        state.SavedUsers.push(action.payload)}
},
removeUser: (state, action) => {
 state.SavedUsers = state.SavedUsers.filter(st => st.email !== action.payload)},

    clearUsers: (state) => {
        state.User = []
    }
}

})

export default User.reducer
export const { setUser, savedUsers, removeUser, clearUsers } = User.actions
