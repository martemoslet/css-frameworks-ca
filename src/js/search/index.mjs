import { readPosts } from "../api/posts/read.mjs"
import { searchContainer } from "../templates/search.mjs"

export async function search(word) {
    const posts = await readPosts();
    const postResults = posts.filter((post) => 
    JSON.stringify(post).toLowerCase().includes(word));
    searchContainer(postResults);
    console.log(posts);
}

export async function setSearchListener() {
    const form = document.querySelector("search-results");

    if(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const searchInput = document.querySelector("#searchInput");
            const searchString = searchInput.ariaValueMax.toLowerCase();
            
            search(searchString);

            //searchInput.value = "";
        })
    }
}