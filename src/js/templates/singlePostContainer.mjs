export function singlePostContainer(postData) {
    return `
    <div class="col-12 col-md-6">
    <div class="thumbnail">
        <div class="card">
            <img class="card-img" src="${postData.media}" alt="${postData.title}" />
            <div class="card-body">
                <h2 class="card-title">${postData.title}</h2>
                <p class="card-text">${postData.body}</p>
                <a href="/post/edit/?id=${postData.id}"><button class="btn btn-outline-primary" id="edit-btn">Edit</button></a>
                <button class="btn btn-outline-primary" id="del-btn">Delete</button>
            </div>
        </div>
    </div>
</div>`;
}