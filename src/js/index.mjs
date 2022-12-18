import router from "./router.mjs";
import * as storage from "./storage/index.mjs"
import { getProfile } from "./api/profiles/index.mjs"
import * as templates from "./templates/index.mjs"
//import { setupSearch } from "./search/index.mjs";

const profile = storage.load("profile");

router();

async function userProfile() {
    const userName = await getProfile(`${profile.name}`);
    templates.userProfileTemplate(userName);
}
userProfile()

//setupSearch()