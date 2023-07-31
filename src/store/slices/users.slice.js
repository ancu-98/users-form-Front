import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const usersSlices = createSlice({
    name: 'users',
    initialState: null,
    reducers: {
        setUsersGlobal: (state, action) => action.payload
    }
})

export const {setUsersGlobal} = usersSlices.actions

export default usersSlices.reducer

export const getAllUsers = () => (dispatch) => {
    const URL = 'https://ancu-98-users-crud.fly.dev/api/v1/users'
    return axios.get(URL)
        .then(res => dispatch(setUsersGlobal(res.data)))
        .catch(err => console.log(err))
}