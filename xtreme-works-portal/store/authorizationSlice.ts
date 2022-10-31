import { createSlice } from "@reduxjs/toolkit";

export const authorizationSlice = createSlice({
    name: "auhtorization",
    initialState: {
        authorization: false
    },
    reducers: {
        updateAuthorization: (state, action) => {
            state.authorization = action.payload.authorization;
        }
    }
});

export const { 
    updateAuthorization, 
} = authorizationSlice.actions;

export default authorizationSlice.reducer;