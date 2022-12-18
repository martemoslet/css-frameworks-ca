import { postContainer } from "./postContainer.mjs"


export function renderPostTemplate(postData, parent) {
   parent.innerHTML += postContainer(postData)
}

export function renderPostTemplates(postDataList, parent) {
    postDataList.map(post => renderPostTemplate(post, parent))
}
