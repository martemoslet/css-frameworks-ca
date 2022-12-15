export function postContainer(postData) {
    return `
    <div class="col-12 col-md-10">
    <a href="/post/?id=${postData.id}">
    <div class="thumbnail">
        <div class="card">
            <div class="card-header">
            <img class="col-1 me-3 profile-img user-img" src="${postData.avatar}" alt="Profile image" />
            ${postData.name}
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