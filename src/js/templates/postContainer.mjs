export function postContainer(postData) {
    return `
    <div class="col-12 col-md-10 col-lg-6 pt-3">
    <a href="/post/?id=${postData.id}">
    <div class="thumbnail">
        <div class="card">
            <div class="card-header">
            ${postData.author.name}
            </div>
            <img class="card-img-top" src="${postData.media}" alt="${postData.title}">
            <div class="card-body">
            <h2 class="card-title">${postData.title}</h2>
            <p class="card-text">${postData.body}</p>
            </div>
        </div>
    </div>
    </a></div>`;
}