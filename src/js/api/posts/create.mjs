import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "post";

/**
 * This will create a post using the POST method and the authFetch function
 * @param {object} postData Is the data the user inserts
 * @returns 
 */

export async function createPost(postData) {
    const createPostURL = API_SOCIAL_URL + action;

    postData.tags = postData.tags.split(",");

    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json();
}