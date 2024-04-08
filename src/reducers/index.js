import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import categoryReducer from "../slices/categorySlice";
import postreducer from "../slices/postSlice";
import profileReducer from "../slices/profileSlice";

const rootReducer = combineReducers({
    auth:authReducer,
    category:categoryReducer,
    post:postreducer,
    profile:profileReducer
})

export default rootReducer;