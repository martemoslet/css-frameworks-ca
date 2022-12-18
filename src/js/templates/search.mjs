export function searchContainer(postData) {
    return `
    <div class="container col-12 col-md-7 col-lg-6 mt-3 mb-3">
    <div class="thumbnail">
        <div class="card">
        <div class="card-header">
            ${postData.author.name}
            </div>
            <img class="" src="${postData.media}" alt="${postData.title}" />
            <div class="card-body">
                <h2 class="card-title">${postData.title}</h2>
                <p class="card-text">${postData.body}</p>
            </div>
        </div>
    </div>
</div>`;
}