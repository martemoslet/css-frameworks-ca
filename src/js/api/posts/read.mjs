import { API_SOCIAL_URL, author } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";

/**
 * This function will get the latest 100 posts from the API
 */

export async function getPosts() {
    const updatePostURL = `${API_SOCIAL_URL}${action}${author}`;

    const response = await authFetch(updatePostURL);

    return await response.json();
}

/**
 * This function will get a specific post using its id
 * @param {object} id is the id of the post chosen
 */

export async function getPost(id) {
    if (!id) {
        throw new Error("Get post requires a postID");
    }
    const getPostURL = `${API_SOCIAL_URL}${action}/${id}${author}`;

    const response = await authFetch(getPostURL)

    return await response.json();
}