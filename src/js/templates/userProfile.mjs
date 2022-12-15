export function userProfileTemplate(profile) {
    return `
    <div class="container">
                    <div class="row">

                        <div class="col col-12 mb-3 pt-2">
                            <div class="card profile-card">
                                <h1 class="text-center pt-2">User profile</h1>
                                <div class="card-body d-flex justify-content-center">
                                    <img class="profile-img col-1 me-3" src="${profile.avatar}" alt="Profile image" />
                                    <p src="${profile.name}"></p>
                                </div>
                            </div>
                        </div>

                        <div class="col col-12 col-md-7 col-lg-8 mb-3 pe-4">
                            <div class="row">
                                <h2 class="text-center">My feed</h2>

                                <form class="ps-3 mb-3">
                                    <input type="text" class="form-control wall-post" id="postToWall" placeholder="Write a new post">
                                    <button class="btn btn-sm btn-outline-primary mt-2" type="submit">Post</button>
                                </form>

                                <div class="card-body d-flex" id="postsOnWall"></div>
                            </div>
                        </div>

                    </div>
                </div>`
}