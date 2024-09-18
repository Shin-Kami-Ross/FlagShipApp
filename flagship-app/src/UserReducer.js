import { createSlice } from "@reduxjs/toolkit";

const LogSlice = createSlice({
    name: "LogInState",
    initialState: { loggedIn: false },
    reducers: {

        LogInLogOut: (state, action) => {
            state.loggedIn = action.payload;
        }
    }


})

export const { LogInLogOut } = LogSlice.actions;
export default LogSlice.reducer;