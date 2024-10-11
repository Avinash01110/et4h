import axios from "axios";
import {
  profileEndpoints,
  publicationEndpoints,
  logoEndpoints,
  frontPageEndpoints,
  teamEndpoints,
  postEndpoints
} from "./apis";

export const fetchTeamProfiles = async () => {
  try {
    const response = await axios.get(profileEndpoints.GET_ALL_PROFILE_API);
    return response.data;
  } catch (error) {
    throw error(error);
  }
};

export const fetchPublications = async () => {
  try {
    const response = await axios.get(
      publicationEndpoints.GET_ALL_PUBLICATIONS_API
    );
    return response.data;
  } catch (error) {
    throw error(error);
  }
};

export const fetchLogo = async () => {
  try {
    const response = await axios.get(logoEndpoints.GET_LOGO_API);
    return response.data;
  } catch (error) {
    throw error(error);
  }
};

export const fetchLatestPost = async () => {
  try {
    const response = await axios.get(
      frontPageEndpoints.GET_ALL_FRONT_PAGES_API
    );
    return response.data;
  } catch (error) {
    throw error(error);
  }
};

export const fetchTeam = async () => {
  try {
    const response = await axios.get(teamEndpoints.GET_ALL_TEAMS_API);
    return response.data;
  } catch (error) {
    throw error(error);
  }
};

export const fetchProject = async () => {
  try {
    const response = await axios.get(postEndpoints.GET_ALL_POSTS_API);
    return response.data;
  } catch (error) {
    throw error(error);
  }
};

export const fetchSingleProject = async () => {
  try {
    const response = await axios.get(postEndpoints.GETSINGLE_POST_API);
    return response.data;
  } catch (error) {
    throw error(error);
  }
};
