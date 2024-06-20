import {toast} from "react-hot-toast";

import {apiConnector} from "../apiConnector";
import { postEndpoints } from "../apis";

import { setPost , setLoading , setError} from "../../slices/postSlice";
const{
    CREATE_POST_API,
    UPDATE_POST_API,
    DELETE_POST_API,
    GET_ALL_POSTS_API,
    GETSINGLE_POST_API,
    CREATE_SUBPOST_API,
    UPDATE_SUBPOST_API,
    DELETE_SUBPOST_API,
    REMOVE_IMAGE_FROM_SUBPOST_API,
    CREATE_MILESTONE_API,
    UPDATE_MILESTONE_API,
    DELETE_MILESTONE_API,

} = postEndpoints;


export const getAllPosts = () => async (dispatch) => {
  const toastId = toast.loading("Fetching Posts...");
  dispatch(setLoading(true));
  try {
    const response = await apiConnector("GET", GET_ALL_POSTS_API);
    console.log("GET_ALL_POSTS_API RESPONSE:", response);

    if (response.data && Array.isArray(response.data.posts)) {
      const posts = response.data.posts;
      dispatch(setPost(posts));
    } else {
      throw new Error("Invalid API response format");
    }
  } catch (error) {
    console.error("GET_ALL_POSTS_API ERROR:", error);
    dispatch(setError(error.message));
    toast.error("Could Not Fetch Posts");
  } finally {
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  }
};
  
  export async function createPost(data, token) {
    let result = null;
    const toastId = toast.loading("Creating Post...");
    try {
      const response = await apiConnector("POST",CREATE_POST_API,  data, {
        Authorization: `Bearer ${token}`,
      });
      console.log("CREATE_POST_API RESPONSE:", response);
  
      if (!response?.data?.success) {
        throw new Error(response.data.message);
      }
      result = response?.data?.data;
      toast.success("Post Created Successfully");
    } catch (error) {
      console.error("CREATE_POST_API ERROR:", error);
      toast.error("Could Not Create Post");
    }
    toast.dismiss(toastId);
    return result;
  }
  
  export async function updatePost(data, token) {
    let result = null;
    const toastId = toast.loading("Updating Post...");
    try {
      const response = await apiConnector("PUT",UPDATE_POST_API,  data, {
        Authorization: `Bearer ${token}`,
      });
      console.log("UPDATE_POST_API RESPONSE:", response);
  
      if (!response?.data?.success) {
        throw new Error(response.data.message);
      }
      result = response?.data?.data;
      toast.success("Post Updated Successfully");
    } catch (error) {
      console.error("UPDATE_POST_API ERROR:", error);
      toast.error("Could Not Update Post");
    }
    toast.dismiss(toastId);
    return result;
  }
  
  export async function deletePost(id, token) {
    let result = null;
    const toastId = toast.loading("Deleting Post...");
    try {
      const response = await apiConnector("DELETE", DELETE_POST_API, { id }, {
        Authorization: `Bearer ${token}`,
      });
      console.log("DELETE_POST_API RESPONSE:", response);
  
      if (!response?.data?.success) {
        throw new Error(response.data.message);
      }
      result = response?.data?.data;
      toast.success("Post Deleted Successfully");
    } catch (error) {
      console.error("DELETE_POST_API ERROR:", error);
      toast.error("Could Not Delete Post");
    }
    toast.dismiss(toastId);
    return result;
  }

  export async function getSinglePost(postId, toast) {
    let result = null;
    const toastId = toast.loading("Fetching Post...");
    try {
      const response = await apiConnector("GET", `${GETSINGLE_POST_API}/${postId}`);
      console.log("GETSINGLE_POST_API RESPONSE:", response);
  
      // Check if the API returned an error message
      if (response.data.error) {
        throw new Error(response.data.error);
      }
  
      // Update the way you access the post data based on the response structure
      result = response.data.post || response.data.data;
    } catch (error) {
      console.error("GETSINGLE_POST_API ERROR:", error.message);
      toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;
  }
  
  export async function createSubpost(data, token) {
    let result = null;
    const toastId = toast.loading("Creating Subpost...");
    try {
      const response = await apiConnector( "POST",CREATE_SUBPOST_API, data, {
        Authorization: `Bearer ${token}`,
      });
      console.log("CREATE_SUBPOST_API RESPONSE:", response);
  
      if (!response?.data?.success) {
        throw new Error(response.data.message);
      }
      result = response?.data?.data;
      toast.success("Subpost Created Successfully");
    } catch (error) {
      console.error("CREATE_SUBPOST_API ERROR:", error);
      toast.error("Could Not Create Subpost");
    }
    toast.dismiss(toastId);
    return result;
  }
  
  export async function updateSubpost(data, token) {
    let result = null;
    const toastId = toast.loading("Updating Subpost...");
    try {
      const response = await apiConnector("PUT",UPDATE_SUBPOST_API,  data, {
        Authorization: `Bearer ${token}`,
      });
      console.log("UPDATE_SUBPOST_API RESPONSE:", response);
  
      if (!response?.data?.success) {
        throw new Error(response.data.message);
      }
      result = response?.data?.data;
      toast.success("Subpost Updated Successfully");
    } catch (error) {
      console.error("UPDATE_SUBPOST_API ERROR:", error);
      toast.error("Could Not Update Subpost");
    }
    toast.dismiss(toastId);
    return result;
  }
  
  export async function deleteSubpost(id, token) {
    let result = null;
    const toastId = toast.loading("Deleting Subpost...");
    try {
      const response = await apiConnector("DELETE",DELETE_SUBPOST_API,  { id }, {
        Authorization: `Bearer ${token}`,
      });
      console.log("DELETE_SUBPOST_API RESPONSE:", response);
  
      if (!response?.data?.success) {
        throw new Error(response.data.message);
      }
      result = response?.data?.data;
      toast.success("Subpost Deleted Successfully");
    } catch (error) {
      console.error("DELETE_SUBPOST_API ERROR:", error);
      toast.error("Could Not Delete Subpost");
    }
    toast.dismiss(toastId);
    return result;
  }
  
  export async function removeImageFromSubpost(subpostId, imageId, token) {
    let result = null;
    const toastId = toast.loading("Removing Image from Subpost...");
    try {
      const response = await apiConnector("DELETE",REMOVE_IMAGE_FROM_SUBPOST_API,  { subpostId, imageId }, {
        Authorization: `Bearer ${token}`,
      });
      console.log("REMOVE_IMAGE_FROM_SUBPOST_API RESPONSE:", response);
  
      if (!response?.data?.success) {
        throw new Error(response.data.message);
      }
      result = response?.data?.data;
      toast.success("Image Removed from Subpost Successfully");
    } catch (error) {
      console.error("REMOVE_IMAGE_FROM_SUBPOST_API ERROR:", error);
      toast.error("Could Not Remove Image from Subpost");
    }
    toast.dismiss(toastId);
    return result;
  }
  
  export async function createMilestone(data, token) {
    let result = null;
    const toastId = toast.loading("Creating Milestone...");
    try {
      const response = await apiConnector("POST",CREATE_MILESTONE_API,  data, {
        Authorization: `Bearer ${token}`,
      });
      console.log("CREATE_MILESTONE_API RESPONSE:", response);
  
      if (!response?.data?.success) {
        throw new Error(response.data.message);
      }
      result = response?.data?.data;
      toast.success("Milestone Created Successfully");
    } catch (error) {
      console.error("CREATE_MILESTONE_API ERROR:", error);
      toast.error("Could Not Create Milestone");
    }
    toast.dismiss(toastId);
    return result;
  }
  
  export async function updateMilestone(data, token) {
    let result = null;
    const toastId = toast.loading("Updating Milestone...");
    try {
      const response = await apiConnector("PUT",UPDATE_MILESTONE_API,  data, {
        Authorization: `Bearer ${token}`,
      });
      console.log("UPDATE_MILESTONE_API RESPONSE:", response);
  
      if (!response?.data?.success) {
        throw new Error(response.data.message);
      }
      result = response?.data?.data;
      toast.success("Milestone Updated Successfully");
    } catch (error) {
      console.error("UPDATE_MILESTONE_API ERROR:", error);
      toast.error("Could Not Update Milestone");
    }
    toast.dismiss(toastId);
    return result;
  }
  
  export async function deleteMilestone(id, token) {
    let result = null;
    const toastId = toast.loading("Deleting Milestone...");
    try {
      const response = await apiConnector("DELETE",DELETE_MILESTONE_API,  { id }, {
        Authorization: `Bearer ${token}`,
      });
      console.log("DELETE_MILESTONE_API RESPONSE:", response);
  
      if (!response?.data?.success) {
        throw new Error(response.data.message);
      }
      result = response?.data?.data;
      toast.success("Milestone Deleted Successfully");
    } catch (error) {
      console.error("DELETE_MILESTONE_API ERROR:", error);
      toast.error("Could Not Delete Milestone");
    }
    toast.dismiss(toastId);
    return result;
  }