import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";

export async function getProfiles() {
    const updateProfileURL = `${API_SOCIAL_URL}${action}`;

    const response = await authFetch(updateProfileURL)

    return await response.json();
}

export async function getProfile(name) {
    if (!name) {
        throw new Error("Get profile requires a name");
    }
    const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

    const response = await authFetch(getProfileURL)

    const userProfile = await response.json()

    return userProfile;

    //return await response.json();
}