import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchPolicies = createAsyncThunk('fetchPolicies', async () => {

    return axios.get("http://localhost:5109/api/policy").then((res) => (res.data))

});

const LogSlice = createSlice({
    name: "LogInState",
    initialState: { loggedIn: false, Loaded: false, data: [] },
    reducers: {

        LogInLogOut: (state, action) => {
            state.loggedIn = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPolicies.fulfilled, (state, action) => {
            state.Loaded = true;
            state.data = action.payload;

        })
        builder.addCase(fetchPolicies.pending, (state) => {
            state.Loaded = false;
        })
        builder.addCase(fetchPolicies.rejected, (state, action) => {

        })
    }

})

export const { LogInLogOut } = LogSlice.actions;
export default LogSlice.reducer;