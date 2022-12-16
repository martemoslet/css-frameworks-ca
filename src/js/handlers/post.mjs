import { getPost } from "../api/posts/read.mjs";
import * as template from "../templates/onePost.mjs";

const url = new URL(location.href);
const id = url.searchParams.get("id");

export async function onePost() {
    const post = await getPost(id);
    const container = document.querySelector("#post");
    template.renderPostTemplate(post, container);
    
}

onePost()