import { createSlice} from "@reduxjs/toolkit";
const initalState={
    step:1,
    loading:false,
    editPost:false,
    post:[],

}
const postSlice = createSlice({
    name:'post',
    initialState:initalState,
    reducers:{
        setStep(state,value){
            state.step=value.payload
        },
        setLoading(state,value){
            state.loading=value.payload
        },
        setEditPost(state,value){
            state.editPost=value.payload
        },
        setPost(state,value){
            state.post=value.payload
        },
        setError(state, action) {
            state.error = action.payload;
        },
    }
})
export const {setStep,setLoading,setEditPost,setPost,setError}=postSlice.actions;
export default postSlice.reducer;