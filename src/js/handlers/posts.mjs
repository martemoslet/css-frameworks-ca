import * as readPosts from "../api/posts/read.mjs";
import * as templates from "../templates/index.mjs";

export async function postFeed () {
    const posts = await readPosts.getPosts();
    const container = document.querySelector("#posts");
    templates.renderPostTemplates(posts, container);
}

postFeed()