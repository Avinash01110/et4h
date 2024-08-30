import { toast } from "react-hot-toast";

import { apiConnector } from "../apiConnector";
import { logoEndpoints } from "../apis";
const{
    ADD_LOGO_API,
    GET_LOGO_API,
    DELETE_LOGO_API
} = logoEndpoints;

export const addLogo = async (data,token) => {
    
    let result = null;
    const toastId = toast.loading("Adding Logo...");
    try {
        const response = await apiConnector("POST", ADD_LOGO_API, data, {
            Authorization: `Bearer ${token}`,
        });
        // console.log("ADD_LOGO_API RESPONSE:", response);

       
        result = response?.data?.data;
        toast.success("Logo Added Successfully");
    } catch (error) {
        // console.error("ADD_LOGO_API ERROR:", error);
        toast.error("Could Not Add Logo");
    } finally {
        toast.dismiss(toastId);
    }
    return result;
}

export const getLogo = async () => {
    let result = null;
    const toastId = toast.loading("Getting Logo...");
    try {
        const response = await apiConnector("GET", GET_LOGO_API);
        // console.log("GET_LOGO_API RESPONSE:", response);

        
        result = response?.data;
        toast.success("Logo Fetched Successfully");
    } catch (error) {
        // console.error("GET_LOGO_API ERROR:", error);
        toast.error("Could Not Fetch Logo");
    } finally {
        toast.dismiss(toastId);
    }
    return result;
}

export const deleteLogo = async (data, token) => {
    let result = null;
    const toastId = toast.loading("Deleting Logo...");
    try {
        const response = await apiConnector("DELETE", DELETE_LOGO_API, data, {
            Authorization: `Bearer ${token}`,
        });
        // console.log("DELETE_LOGO_API RESPONSE:", response);

        result = response?.data?.data;
        toast.success("Logo Deleted Successfully");
    } catch (error) {
        // console.error("DELETE_LOGO_API ERROR:", error);
        toast.error("Could Not Delete Logo");
    } finally {
        toast.dismiss(toastId);
    }
    return result;
}