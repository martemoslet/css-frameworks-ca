export function postContainer(postData) {
    return `
    <div class="pt-3">
    <a href="/post/?id=${postData.id}">
    <div class="thumbnail">
        <div class="card">
            <div class="card-header">
            ${postData.author.name}
            </div>
            <img class="" src="${postData.media}" alt="${postData.title}">
            <div class="card-body">
            <h2 class="card-title">${postData.title}</h2>
            <p class="card-text">${postData.body}</p>
            </div>
        </div>
    </div>
    </a></div>`;
}