import { API_SOCIAL_URL, author } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "DELETE";

/**
 * This will delete a post using the DELETE method and authFetch function
 * @param {object} id is the id of the post the user wants to delete 
 */

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