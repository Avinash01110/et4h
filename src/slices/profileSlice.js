import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: [], // Correctly initialized as an empty array
    loading: false,
    error: null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile(state, action) {
            state.profile = action.payload.profiles; // Ensure only profiles are set
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
})

export const { setProfile, setLoading, setError } = profileSlice.actions;

// Reducers
export default profileSlice.reducer;
