import { singlePostContainer } from "./singlePostContainer.mjs"

export function renderPostTemplate(postData, parent) {
   parent.innerHTML += singlePostContainer(postData)
}

export function renderPostTemplates(postData, parent) {
    postData(post => renderPostTemplate(post, parent))
}