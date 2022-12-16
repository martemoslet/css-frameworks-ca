export function singlePostContainer(postData) {
    return `
    <div class="container col-12 col-md-6 col-lg-4 mt-3">
    <div class="thumbnail">
        <div class="card">
        <div class="card-header">
            ${postData.author.name}
            </div>
            <img class="" src="${postData.media}" alt="${postData.title}" />
            <div class="card-body">
                <h2 class="card-title">${postData.title}</h2>
                <p class="card-text">${postData.body}</p>
                <a href="/post/edit/?id=${postData.id}"><button class="btn btn-sm btn-primary" id="edit-btn">Edit</button></a>
                <button type="button" class="btn btn-dark btn-sm" id="del-btn">Delete</button>
            </div>
        </div>
    </div>
</div>`;
}