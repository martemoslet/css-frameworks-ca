import { getPost, updatePost } from "../api/posts/index.mjs";

/**
 * This function will update a specific post using its id.
 * The id is found through the URL, and displays the title,
 * body, tags and media of the post. The button is disabled 
 * until the post is loaded
 */

export async function setUpdatePostListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button")
    button.disabled = true;

    const post = await getPost(id);

    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags;
    form.media.value = post.media;

    button.disabled = false;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;
      alert("Post updated");
      await updatePost(post);
      location.href = "/posts/";
    });
  }
}