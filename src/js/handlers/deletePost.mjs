import { removePost } from "../api/posts/index.mjs"

/**
 * This is the function for deleting a specific post.
 * It needs the id of the post, and lets the user delete 
 * the post with the button
 */

export function setRemovePostListener() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  const button = document.querySelector("#delete-button");

    if(button) {
      button.addEventListener("click", async (event) => {
        alert("Post deleted");
        await removePost(id);
        location.href = "/posts/";

      })
    } 
  }