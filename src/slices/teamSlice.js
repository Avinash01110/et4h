// slices/teamSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    teams: [], // Changed from team to teams
    loading: false,
    error: null
};

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setTeams(state, action) { // Renamed from setTeam to setTeams
            console.log('setTeams action payload:', action.payload);
            state.teams = action.payload; // Updated to teams
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
});

export const { setTeams, setLoading, setError } = teamSlice.actions; // Export the updated action

export default teamSlice.reducer;
