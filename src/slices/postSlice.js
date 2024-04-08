import { createSlice} from "@reduxjs/toolkit";
const initalState={
    step:1,
    loading:false,
    editPost:false,
    post:null,

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
        }
    }
})
export const {setStep,setLoading,setEditPost,setPost}=postSlice.actions;
export default postSlice.reducer;