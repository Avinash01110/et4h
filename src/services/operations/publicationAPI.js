import {toast} from "react-hot-toast";

import {apiConnector} from "../apiConnector";
import {publicationEndpoints} from "../apis";

const {
    ADD_PUBLICATION_API,
    GET_ALL_PUBLICATIONS_API,
    UPDATE_PUBLICATION_API,
    DELETE_PUBLICATION_API,
} = publicationEndpoints;


export async function addPublication(data, token) {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", ADD_PUBLICATION_API, data, {
            Authorization: `Bearer ${token}`,
        });
        console.log("ADD_PUBLICATION_API RESPONSE............", response);

        if (!response?.data?.success) {
            throw new Error(response.data.message);
        }
        result = response?.data?.data;
        toast.success("Publication Added Successfully");
    } catch (error) {
        console.log("ADD_PUBLICATION_API ERROR............", error);
        toast.error("Could Not Add Publication");
    }
    toast.dismiss(toastId);
    return result;
}

export async function updatePublication(data, token) {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("PUT", UPDATE_PUBLICATION_API, data, {
            Authorization: `Bearer ${token}`,
        });
        console.log("UPDATE Publication API RESPONSE............", response);
        if (!response?.data?.success) {
            throw new Error("Could Not Update Publication");
        }
        toast.success("Publication Updated");
        result = response?.data?.data;
        console.log("UPDATE Publication API RESULT............", result);
    } catch (error) {
        console.log("UPDATE   Publication API ERROR............", error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}

export async function deletePublication(data, token) {
    const toastId = toast.loading("Loading...");
    console.log("DELETE Publication API REQUEST............", data);
    let result = null;
    try {
        const response = await apiConnector("DELETE", DELETE_PUBLICATION_API, data, {
            Authorization: `Bearer ${token}`,
        });
        console.log("DELETE Publication API RESPONSE............", response);
        if (!response?.data?.success) {
            throw new Error("Could Not Delete Publication");
        }
        toast.success("Publication Deleted");
        result = response?.data?.data;
    } catch (error) {
        console.log("DELETE Publication API ERROR............", error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}

export async function getAllPublications() {
    let result = null;
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector("GET", GET_ALL_PUBLICATIONS_API);
        console.log("GET_ALL_PUBLICATIONS_API RESPONSE............", response);
        if (!response?.data?.success) {
            throw new Error("Could Not Get Publications");
        }
        result = response?.data?.publications;
        console.log("GET_ALL_PUBLICATIONS_API RESULT............", result);
    } catch (error) {
        console.log("GET_ALL_PUBLICATIONS_API ERROR............", error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
}