const BASE_URL = process.env.REACT_APP_BASE_URL

export const endpoints = {
SENDOTP_API: BASE_URL + "/auth/sendotp",
SIGNUP_API: BASE_URL + "/auth/signup",
LOGIN_API: BASE_URL + "/auth/login",
CHANGEPASSWORD_API: BASE_URL + "/auth/changepassword",
RESETPASSTOKEN_API:BASE_URL+"/auth/reset-password-token",
UPDATEPASSWORD_API:BASE_URL+"/auth/update-password",
}

// Category Endpoints
export const categoryEndpoints = {
ADD_CATEGORY_API: BASE_URL + "/category/addCategory",
GETALL_CATEGORIES_API: BASE_URL + "/category/showAllCategories",
UPDATE_CATEGORY_API: BASE_URL + "/category/updateCategory",
DELETE_CATEGORY_API: BASE_URL + "/category/deleteCategory",
GET_CATEGORY_PAGE_API: BASE_URL + "/category/category",
}

// Post endpoints
export const postEndpoints = {
CREATE_POST_API: BASE_URL + "/post/createPost",
UPDATE_POST_API: BASE_URL + "/post/updatePost",
DELETE_POST_API: BASE_URL + "/post/deletePost",
GET_ALL_POSTS_API: BASE_URL + "/post/getAllPosts",
GETSINGLE_POST_API:BASE_URL+"/post/getSinglePost",
CREATE_SUBPOST_API: BASE_URL + "/post/createSubPost",
UPDATE_SUBPOST_API: BASE_URL + "/post/updateSubPost",
DELETE_SUBPOST_API: BASE_URL + "/post/deleteSubPost",
REMOVE_IMAGE_FROM_SUBPOST_API: BASE_URL + "/post/removeImageFromSubPost",
CREATE_MILESTONE_API: BASE_URL + "/post/createMilestone",
UPDATE_MILESTONE_API: BASE_URL + "/post/updateMilestone",
DELETE_MILESTONE_API: BASE_URL + "/post/deleteMilestone",
}

export const profileEndpoints = {
   CREATE_PROFILE_API: BASE_URL + "/profile/createProfile",
    UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
    DELETE_PROFILE_API:BASE_URL+"/profile/deleteProfile",
    GET_ALL_PROFILE_API:BASE_URL+"/profile/profiles", 
}

export const publicationEndpoints = {
ADD_PUBLICATION_API: BASE_URL + "/publication/addPublication",
GET_ALL_PUBLICATIONS_API: BASE_URL + "/publication/showAllPublications",
UPDATE_PUBLICATION_API: BASE_URL + "/publication/updatePublication",
DELETE_PUBLICATION_API: BASE_URL + "/publication/deletePublication",
}

export const frontPageEndpoints = {
CREATE_FRONT_PAGE_API: BASE_URL + "/frontPage/createFrontPage",
UPDATE_FRONT_PAGE_API: BASE_URL + "/frontPage/updateFrontPage",
DELETE_FRONT_PAGE_API: BASE_URL + "/frontPage/deleteFrontPage",
GET_ALL_FRONT_PAGES_API: BASE_URL + "/frontPage/frontPages",
}

export const teamEndpoints = {
ADD_TEAM_API: BASE_URL + "/team/add",
GET_ALL_TEAMS_API: BASE_URL + "/team/all",
UPDATE_TEAM_API: BASE_URL + "/team/update",
DELETE_TEAM_API: BASE_URL + "/team/delete",
}

export const logoEndpoints = {
ADD_LOGO_API: BASE_URL + "/logo/addLogo",
GET_LOGO_API: BASE_URL + "/logo/getLogo",
DELETE_LOGO_API: BASE_URL + "/logo/deleteLogo",
}

export const researchProgressEndpoints = {
CREATE_RESEARCH_PROGRESS_API: BASE_URL + "/researchProgress/createResearchProgress",
UPDATE_RESEARCH_PROGRESS_API: BASE_URL + "/researchProgress/updateResearchProgress",
DELETE_SINGLE_IMAGE_API: BASE_URL + "/researchProgress/deleteSingleImage",
GET_RESEARCH_PROGRESS_API: BASE_URL + "/researchProgress/getResearchProgress",
DELETE_RESEARCH_PROGRESS_API: BASE_URL + "/researchProgress/deleteResearchProgress",
}