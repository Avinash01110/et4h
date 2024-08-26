import {toast} from "react-hot-toast";

import {apiConnector} from "../apiConnector";
import { frontPageEndpoints } from "../apis";

import { setFrontPage } from "../../slices/frontPageSlice";
const {
    CREATE_FRONT_PAGE_API,
    UPDATE_FRONT_PAGE_API,
    DELETE_FRONT_PAGE_API,
    GET_ALL_FRONT_PAGES_API,
} = frontPageEndpoints;
export const getAllFrontPages = () => async (dispatch) => {
    const toastId = toast.loading("Fetching FrontPages...");
    try {
        const response = await apiConnector("GET", GET_ALL_FRONT_PAGES_API);
        console.log("GET_ALL_FRONT_PAGES_API RESPONSE:", response);

        if (response.data && Array.isArray(response.data.frontPages)) {
            const frontPages = response.data.frontPages;
            dispatch(setFrontPage(frontPages));
        } else {
            throw new Error("Invalid API response format");
        }
    } catch (error) {
        console.error("GET_ALL_FRONT_PAGES_API ERROR:", error);
        toast.error("Could Not Fetch FrontPages");
    } finally {
        toast.dismiss(toastId);
    }
};

export async function createFrontPage(data, token) {
    let result = null;
    const toastId = toast.loading("Creating FrontPage...");
    try {
        const response = await apiConnector("POST", CREATE_FRONT_PAGE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        console.log("CREATE_FRONT_PAGE_API RESPONSE:", response);

        if (!response?.data?.success) {
            throw new Error(response.data.message);
        }
        result = response?.data?.data;
        toast.success("FrontPage Created Successfully");
    } catch (error) {
        console.error("CREATE_FRONT_PAGE_API ERROR:", error);
        toast.error("Could Not Create FrontPage");
    } finally {
        toast.dismiss(toastId);
    }
    return result;
}

export async function updateFrontPage(data, token) {
    let result = null;
    const toastId = toast.loading("Updating FrontPage...");
    try {
        const response = await apiConnector("PUT", UPDATE_FRONT_PAGE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        console.log("UPDATE_FRONT_PAGE_API RESPONSE:", response);

        if (!response?.data?.success) {
            throw new Error(response.data.message);
        }
        result = response?.data?.data;
        toast.success("FrontPage Updated Successfully");
    } catch (error) {
        console.error("UPDATE_FRONT_PAGE_API ERROR:", error);
        toast.error("Could Not Update FrontPage");
    } finally {
        toast.dismiss(toastId);
    }
    return result;
}

export async function deleteFrontPage(data, token) {
    let result = null;
    const toastId = toast.loading("Deleting FrontPage...");
    try {
        const response = await apiConnector("DELETE", DELETE_FRONT_PAGE_API, data, {
            Authorization: `Bearer ${token}`,
        });
        console.log("DELETE_FRONT_PAGE_API RESPONSE:", response);

        if (!response?.data?.success) {
            throw new Error(response.data.message);
        }
        result = response?.data?.data;
        toast.success("FrontPage Deleted Successfully");
    } catch (error) {
        console.error("DELETE_FRONT_PAGE_API ERROR:", error);
        toast.error("Could Not Delete FrontPage");
    } finally {
        toast.dismiss(toastId);
    }
    return result;
}