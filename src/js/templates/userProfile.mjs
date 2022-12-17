const profileContainer = document.querySelector("#user-profile");

export function userProfileTemplate(profile) {
    if(profileContainer) {
        return profileContainer.innerHTML +=
        `
        <div class="container">
            <div class="row">
                <div class="col col-12 mb-3 pt-2">
                    <h1 class="text-center pt-2 pb-4">Profile</h1>
                    <div class="card-body d-flex justify-content-center">
                    <img class="profile-img col-1 me-3" src="${profile.avatar}" alt="Profile image" />
                    <div class="card-text">
                    <h2>${profile.name}</h2>
                    <p>${profile.email}</p>
                    <p>${profile._count.posts} Posts</p>
                    <p>${profile._count.following} Following | ${profile._count.followers} Followers</p>
                    </div>
                 </div>
             </div>
        </div>
        `
    }
}