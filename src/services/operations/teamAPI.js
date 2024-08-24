import {toast} from "react-hot-toast";

import {apiConnector} from "../apiConnector";
import { teamEndpoints } from "../apis";
import { setTeams } from "../../slices/teamSlice";
const{
    ADD_TEAM_API,
    GET_ALL_TEAMS_API,
    UPDATE_TEAM_API,
    DELETE_TEAM_API
} = teamEndpoints;
// operations/teamAPI.js
export const getAllTeams = () => async (dispatch) => {
    const toastId = toast.loading("Fetching Teams...");
    try {
        const response = await apiConnector("GET", GET_ALL_TEAMS_API);
        console.log("API Response:", response.data);

        if (response.data && Array.isArray(response.data.teams)) {
            const teams = response.data.teams;
            console.log("Teams to be dispatched:", teams);
            dispatch(setTeams(teams)); // Use setTeams action
        } else {
            throw new Error("Invalid API response format");
        }
    } catch (error) {
        console.error("GET_ALL_TEAMS_API ERROR:", error);
        toast.error("Could Not Fetch Teams");
    } finally {
        toast.dismiss(toastId);
    }
};

export const addTeam = (teamData,token) => async (dispatch) => {
    const toastId = toast.loading("Creating Team...");
    try {
        const response = await apiConnector("POST", ADD_TEAM_API, teamData,{
            Authorization: `Bearer ${token}`,
        });
        console.log("ADD_TEAM_API RESPONSE:", response);

        if (response.data && response.data.success) {
            toast.success(response.data.message);
            dispatch(getAllTeams());
        } else {
            throw new Error("Invalid API response format");
        }
    } catch (error) {
        console.error("ADD_TEAM_API ERROR:", error);
        toast.error("Could Not Create Team");
    } finally {
        toast.dismiss(toastId);
    }
};
export const updateTeam = (teamData,token) => async (dispatch) => {
    const toastId = toast.loading("Updating Team...");
    try {
        const response = await apiConnector("PUT", UPDATE_TEAM_API, teamData,{
            Authorization: `Bearer ${token}`,
        });
        console.log("UPDATE_TEAM_API RESPONSE:", response);

        if (response.data && response.data.success) {
            toast.success(response.data.message);
            dispatch(getAllTeams());
        } else {
            throw new Error("Invalid API response format");
        }
    } catch (error) {
        console.error("UPDATE_TEAM_API ERROR:", error);
        toast.error("Could Not Update Team");
    } finally {
        toast.dismiss(toastId);
    }
};

export const deleteTeam = (teamId,token) => async (dispatch) => {
    const toastId = toast.loading("Deleting Team...");
    try {
        const response = await apiConnector("DELETE", DELETE_TEAM_API, { teamId },{
            Authorization: `Bearer ${token}`,
        });
        console.log("DELETE_TEAM_API RESPONSE:", response);

        if (response.data && response.data.success) {
            toast.success(response.data.message);
            dispatch(getAllTeams());
        } else {
            throw new Error("Invalid API response format");
        }
    } catch (error) {
        console.error("DELETE_TEAM_API ERROR:", error);
        toast.error("Could Not Delete Team");
    } finally {
        toast.dismiss(toastId);
    }
};