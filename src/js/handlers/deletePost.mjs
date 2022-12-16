import { removePost } from "../api/posts/index.mjs"


export function setRemovePostListener() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  const button = document.querySelector("#del-btn");

    if(button) {
      button.addEventListener("click", (event) => {

        removePost(id);
      })
    } 
  }