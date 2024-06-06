import {toast} from "react-hot-toast";

import {apiConnector} from "../apiConnector";
import {categoryEndpoints} from "../apis";

import { setCategories , setLoading ,setError} from "../../slices/categorySlice";

const { ADD_CATEGORY_API, 
    GETALL_CATEGORIES_API,
     UPDATE_CATEGORY_API,
      DELETE_CATEGORY_API, 
      GET_CATEGORY_PAGE_API } = categoryEndpoints;
      export const getAllCategory = () => async (dispatch) => {
        const toastId = toast.loading('Fetching Categories...');
        dispatch(setLoading(true));
        try {
          const response = await apiConnector('GET', GETALL_CATEGORIES_API);
          if (!response.data.success) {
            throw new Error(response.data.message);
          }
          dispatch(setCategories(response.data.categories));
        } catch (error) {
          toast.error('Could Not Fetch Categories');
          dispatch(setError(error.message)); // Dispatch setError action
        } finally {
          dispatch(setLoading(false));
          toast.dismiss(toastId);
        }
      };
//             toast.success("Signed Up Successfully");
export async function addCategory(data,token) {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector(ADD_CATEGORY_API, "POST", data, {
            Authorization: `Bearer ${token}`,
          
        });
        console.log("ADD_CATEGORY_API RESPONSE............", response);

        if (!response?.data?.success) {
            throw new Error(response.data.message);
        }
        result = response?.data?.data;
        toast.success("Category Added Successfully");
    } catch (error) {
        console.log("ADD_CATEGORY_API ERROR............", error);
        toast.error("Could Not Add Category");
    }
    toast.dismiss(toastId);
    return result;
}

export async function updateCategory(data,token) {
    let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("PUT", UPDATE_CATEGORY_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("UPDATE Category API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Category")
    }
    toast.success("Category Updated")
    result = response?.data?.data
  } catch (error) {
    console.log("UPDATE   CATEGORY API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export async function deleteCategory (data,token) {
  const toastId = toast.loading("Loading...")
  let result = null
  try {
    const response = await apiConnector("DELETE", DELETE_CATEGORY_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("DELETE CATEGORY API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Category")
    }
    toast.success("Category Deleted")
    result = response?.data?.data
  } catch (error) {
    console.log("DELETE CATEGORY API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
export async function getCategoryPage(categoryId) {
  const toastId = toast.loading("Loading...");
  let result = null;
  try {
    const response = await apiConnector("GET", `${GET_CATEGORY_PAGE_API}/${categoryId}`);
    console.log("API Response:", response);
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Category Page");
    }
    result = response?.data;
  } catch (error) {
    console.log("GET CATEGORY PAGE API ERROR:", error);
    toast.error(error.message);
  } finally {
    toast.dismiss(toastId);
  }
  console.log("THis is result " ,result)
  return result;
}
