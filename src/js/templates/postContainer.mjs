export function postContainer(postData) {
    return `
    <div class="col thumbnail">
        <div class="card">
            <img class="card-img-top" src="${postData.media}" alt="${postData.title}">
            <div class="card-body">
            <h2 class="card-title">${postData.title}</h2>
            <p class="card-text">${postData.body}</p>
        </div>
    </div>`;
}