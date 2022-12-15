import { createPost } from "../api/posts/index.mjs";

export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      await createPost(post);
      location.href = "/posts/";

      // Send it to the API
      createPost(post)
    })
  }
}
