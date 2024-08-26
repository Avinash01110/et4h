
import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import categoryReducer from "../slices/categorySlice";
import postReducer from "../slices/postSlice";
import profileReducer from "../slices/profileSlice";
import teamReducer from "../slices/teamSlice"; // Import the correct reducer

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    post: postReducer,
    profile: profileReducer,
    team: teamReducer // Use the correct reducer
});

export default rootReducer;
