import {toast} from "react-hot-toast";

import {apiConnector} from "../apiConnector";
import { researchProgressEndpoints } from "../apis";

const {
    CREATE_RESEARCH_PROGRESS_API,
    UPDATE_RESEARCH_PROGRESS_API,
    DELETE_SINGLE_IMAGE_API,
    GET_RESEARCH_PROGRESS_API,

} = researchProgressEndpoints;

export async function createResearchProgress(data, token) {
    let result = null;
    const toastId = toast.loading("Creating Research Progress...");
    try {
        const response = await apiConnector("POST", CREATE_RESEARCH_PROGRESS_API, data, {
            Authorization: `Bearer ${token}`,
        });
        console.log("CREATE_RESEARCH_PROGRESS_API RESPONSE:", response);

        if (!response?.data?.success) {
            throw new Error(response.data.message);
        }
        result = response?.data?.data;
        toast.success("Research Progress Created Successfully");
    } catch (error) {
        console.error("CREATE_RESEARCH_PROGRESS_API ERROR:", error);
        toast.error("Could Not Create Research Progress");
    } finally {
        toast.dismiss(toastId);
    }
    return result;
}

export async function updateResearchProgress(data, token) {
    let result = null;
    const toastId = toast.loading("Updating Research Progress...");
    try {
        const response = await apiConnector("PUT", UPDATE_RESEARCH_PROGRESS_API, data, {
            Authorization: `Bearer ${token}`,
        });
        console.log("UPDATE_RESEARCH_PROGRESS_API RESPONSE:", response);

        if (!response?.data?.success) {
            throw new Error(response.data.message);
        }
        result = response?.data?.data;
        toast.success("Research Progress Updated Successfully");
    } catch (error) {
        console.error("UPDATE_RESEARCH_PROGRESS_API ERROR:", error);
        toast.error("Could Not Update Research Progress");
    } finally {
        toast.dismiss(toastId);
    }
    return result;
}

export async function deleteSingleImage(data, token) {
    let result = null;
    const toastId = toast.loading("Deleting Image...");
    try {
        const response = await apiConnector("DELETE", DELETE_SINGLE_IMAGE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        console.log("DELETE_SINGLE_IMAGE_API RESPONSE:", response);

        if (!response?.data?.success) {
            throw new Error(response.data.message);
        }
        result = response?.data?.data;
        toast.success("Image Deleted Successfully");
    } catch (error) {
        console.error("DELETE_SINGLE_IMAGE_API ERROR:", error);
        toast.error("Could Not Delete Image");
    } finally {
        toast.dismiss(toastId);
    }
    return result;
}

export async function getResearchProgress(postId) {
    let result = null;
    try {
        const response = await apiConnector("POST", GET_RESEARCH_PROGRESS_API, { postId });
        console.log("GET_RESEARCH_PROGRESS_API RESPONSE:", response);

        if (!response?.data?.success) {
            throw new Error(response.data.message);
        }
        result = response?.data?.researchProgress; // Assuming the response has researchProgress
        console.log("GET_RESEARCH_PROGRESS_API RESULT:", result);
    } catch (error) {
        console.error("GET_RESEARCH_PROGRESS_API ERROR:", error);
    }
    return result; 
}

