import * as readPosts from "../api/posts/read.mjs";
import * as templates from "../templates/post.mjs";

/**
 * This function will post the posts to the chosen id on a HTML page
 */


export async function postFeed () {
    const posts = await readPosts.getPosts();

    const container = document.querySelector("#posts");
    templates.renderPostTemplates(posts, container);
    
}

postFeed();
