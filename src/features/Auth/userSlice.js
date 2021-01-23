import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "API/userApi";

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        // call api to register
        const data = await userApi.register(payload)
        // save data to local storage
        localStorage.setItem('access_token', data.jwt)
        localStorage.setItem('user', JSON.stringify(data.user))
        return data.user;
    }
)
const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        settings: {}
    },
    reducers: {

    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            console.log('current', action.payload)
            state.current = action.payload
        }
    }
})


const { reducer } = userSlice;
export default reducer;