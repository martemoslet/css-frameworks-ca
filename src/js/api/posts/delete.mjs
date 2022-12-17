import { API_SOCIAL_URL, author } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "DELETE";

export async function removePost(id) {
    if (!id) {
        throw new Error("Deleting requires a postID");
    }
    //const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;
    const removePostURL = `${API_SOCIAL_URL}${action}/${id}${author}`;


    const response = await authFetch(removePostURL, {
        method
    })
    console.log(removePostURL);
    return await response.json();
}