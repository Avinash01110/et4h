// slices/frontPageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    frontPage: [],
    loading: false,
    error: null
};

const frontPageSlice = createSlice({
    name: 'frontPage',
    initialState,
    reducers: {
        setFrontPage(state, action) {
            console.log('setFrontPage action payload:', action.payload);
            state.frontPage = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
});

export const { setFrontPage, setLoading, setError } = frontPageSlice.actions;

export default frontPageSlice.reducer;
