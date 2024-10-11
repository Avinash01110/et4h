import {toast} from "react-hot-toast";

import {apiConnector} from "../apiConnector";

import { profileEndpoints } from "../apis";

import { setProfile , setLoading,setError } from "../../slices/profileSlice";
const { CREATE_PROFILE_API, 
    UPDATE_PROFILE_API , 
    DELETE_PROFILE_API ,
     GET_ALL_PROFILE_API } = profileEndpoints;

     export const getAllProfile = () => async (dispatch) => {
        const toastId = toast.loading("Fetching Profiles...");
        dispatch(setLoading(true));
        try {
          const response = await apiConnector("GET", GET_ALL_PROFILE_API);
          console.log("GET_ALL_PROFILE_API RESPONSE............", response);
      
          if (!response.data.success) {
            throw new Error(response.data.message);
          }
      
          const result = response?.data;
          console.log("GET_ALL_PROFILE_API RESULT............", result);
          dispatch(setProfile(result)); // Dispatch the setProfile action with the fetched profiles
        } catch (error) {
          console.log("GET_ALL_PROFILE_API ERROR............", error);
          dispatch(setError(error.message)); // Dispatch the setError action with the error message
          toast.error("Could Not Fetch Profiles");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
      };

export async function addProfile(data,token) {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector( "POST", CREATE_PROFILE_API,data, {
            Authorization: `Bearer ${token}`,
          
        });
        console.log("ADD_PROFILE_API RESPONSE............", response);

        // if (!response?.data?.success) {
        //     throw new Error(response.data.message);
        // }
        result = response?.data?.data;
        toast.success("Profile Added Successfully");
    } catch (error) {
        console.log("ADD_PROFILE_API ERROR............", error);
        toast.error("Could Not Add Profile");
    }
    toast.dismiss(toastId);
    return result;
}

export async function updateProfile(data,token) {
    let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("PUT", UPDATE_PROFILE_API, data, {
        Authorization: `Bearer ${token}`,
    });
    console.log("UPDATE_PROFILE_API RESPONSE............", response);

    // if (!response?.data?.success) {
    //     throw new Error(response.data.message);
    // }
    result = response?.data?.data;
    toast.success("Profile Updated Successfully");
  } catch (error) {
    console.log("UPDATE_PROFILE_API ERROR............", error);
    toast.error("Could Not Update Profile");
  }
  toast.dismiss(toastId);
  return result;
}


export async function deleteProfile(profileId,token) {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector( "DELETE", DELETE_PROFILE_API,{profileId}, {
            Authorization: `Bearer ${token}`,
        });
        console.log("DELETE_PROFILE_API RESPONSE............", response);

        // if (!response?.data?.success) {
        //     throw new Error(response.data.message);
        // }
        result = response?.data?.data;
        toast.success("Profile Deleted Successfully");
    } catch (error) {
        console.log("DELETE_PROFILE_API ERROR............", error);
        toast.error("Could Not Delete Profile");
    }
    toast.dismiss(toastId);
    return result;
}