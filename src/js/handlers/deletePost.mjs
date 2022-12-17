import { removePost } from "../api/posts/index.mjs"

//import * as storage from "./storage/index.mjs"


export function setRemovePostListener() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  const button = document.querySelector("#delete-button");

  //const profile = storage.load("profile");

  //if (postData.author.name === profile.name) {
    //showButtons()
  //}

    if(button) {
      button.addEventListener("click", async (event) => {
        alert("Post deleted");
        await removePost(id);
        location.href = "/posts/";

        removePost(id);
      })
    } 
  }