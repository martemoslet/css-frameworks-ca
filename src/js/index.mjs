import router from "./router.mjs";
import * as storage from "./storage/index.mjs"
import { getProfile } from "./api/profiles/index.mjs"
import * as templates from "./templates/index.mjs"

const profile = storage.load("profile");

router();

/**
 * This function creates the profile taking the users
 * data into the profile template
 */

async function userProfile() {
    const userName = await getProfile(`${profile.name}`);
    templates.userProfileTemplate(userName);
}
userProfile()