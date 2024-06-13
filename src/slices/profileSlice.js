import { createSlice } from "@reduxjs/toolkit";

const initalState= {
    profile:[],
    loading:false,
    error:null
}

const profileSlice = createSlice({
    name:'profile',
    initialState:initalState,
    reducers:{
        setProfile(state,value){
            state.profile=value.payload
        },
        setLoading(state,value){
            state.loading=value.payload
        },
        setError(state,value){
            state.error=value.payload
        }
    }
})

export const {setProfile,setLoading,setError}=profileSlice.actions;

// Reducers
export default profileSlice.reducer;