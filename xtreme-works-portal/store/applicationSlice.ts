import { createSlice } from "@reduxjs/toolkit";

export const applicationSlice = createSlice({
    name: "application",
    initialState: {
        drawer: false,
        dashboard_tab: 0
    },
    reducers: {
        updateDrawer: (state, action) => {
            state.drawer = action.payload.drawer;
        },
        updateDashboardTab: (state, action) => {
            state.dashboard_tab = action.payload.dashboard_tab;
        }
    }
});

export const { 
    updateDrawer, 
    updateDashboardTab
} = applicationSlice.actions;

export default applicationSlice.reducer;