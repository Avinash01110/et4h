import axios from 'axios'
import { profileEndpoints, publicationEndpoints } from './apis'

export const fetchTeamProfiles = async () => {
    try {
        const response = await axios.get(profileEndpoints.GET_ALL_PROFILE_API);
        return response.data;
    } catch (error) {
        throw error(error)
    }
}

// export const fetchPublications = async () => {
//     try {
// import { profileEndpoints, publicationEndpoints } from './apis'
// const response = await axios.get()
//     }
// }