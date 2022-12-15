import { postContainer } from "./postContainer.mjs"

export function postTemplateA(postData) {
    return `<div class="post" id=${postData.id}>${postData.title}</div>`
}

export function postTemplateB(postData) {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerText = postData.title;
    post.innerText = postData.body;

    if (postData.media) {
        const img = document.createElement('img');
        img.src = postData.media;
        img.alt = `Image from ${postData.title}`
        post.append(img);
    }

    return post;
}

export function renderPostTemplate(postData, parent) {
   parent.innerHTML += postContainer(postData)
   // parent.append(postTemplateB(postData))
}

export function renderPostTemplates(postDataList, parent) {
    postDataList.map(post => renderPostTemplate(post, parent))
}