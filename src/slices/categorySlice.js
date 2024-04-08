import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categories: null,
    loading: false,
    error: null
}
const categorySlice = createSlice({
    name:'category',
    initialState: initialState,
    reducers:{
        setCategories(state, value){
            state.categories = value.payload
        },
        setLoading(state, value){
            state.loading = value.payload
        },
        setError(state, value){
            state.error = value.payload
        }
    }
})

export const { setCategories, setLoading, setError } = categorySlice.actions;

export default categorySlice.reducer;