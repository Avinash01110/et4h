import {toast} from "react-hot-toast";

import {apiConnector} from "../apiConnector";

import { profileEndpoints } from "../apis";

import { setProfile , setLoading } from "../../slices/profileSlice";
const { CREATE_PROFILE_API, 
    UPDATE_PROFILE_API , 
    DELETE_PROFILE_API ,
     GET_ALL_PROFILE_API } = profileEndpoints;

export const getAllProfile = () => async (dispatch) => {
    const toastId = toast.loading("Fetching Profiles...");
    let result = []
    dispatch(setLoading(true));
    try {
        const response = await apiConnector(GET_ALL_PROFILE_API, "GET");
        console.log("GET_ALL_PROFILE_API RESPONSE............", response);

        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        
        result = response?.data?.data
    } catch (error) {
        console.log("GET_ALL_PROFILE_API ERROR............", error);
        toast.error("Could Not Fetch Profiles");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
    return result
}

export async function addProfile(data,token) {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector(CREATE_PROFILE_API, "POST", data, {
            Authorization: `Bearer ${token}`,
          
        });
        console.log("ADD_PROFILE_API RESPONSE............", response);

        if (!response?.data?.success) {
            throw new Error(response.data.message);
        }
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

    if (!response?.data?.success) {
        throw new Error(response.data.message);
    }
    result = response?.data?.data;
    toast.success("Profile Updated Successfully");
  } catch (error) {
    console.log("UPDATE_PROFILE_API ERROR............", error);
    toast.error("Could Not Update Profile");
  }
  toast.dismiss(toastId);
  return result;
}


export async function deleteProfile(id,token) {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector(DELETE_PROFILE_API, "DELETE", {id}, {
            Authorization: `Bearer ${token}`,
        });
        console.log("DELETE_PROFILE_API RESPONSE............", response);

        if (!response?.data?.success) {
            throw new Error(response.data.message);
        }
        result = response?.data?.data;
        toast.success("Profile Deleted Successfully");
    } catch (error) {
        console.log("DELETE_PROFILE_API ERROR............", error);
        toast.error("Could Not Delete Profile");
    }
    toast.dismiss(toastId);
    return result;
}