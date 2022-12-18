import * as listeners from "./handlers/index.mjs"

export default function router() {
    const path = location.pathname;

    switch (path) {
        case '/profile/login/':
            listeners.setLoginFormListener()
            break;
        case '/profile/register/':
            listeners.setRegisterFormListener()
            break;
        case '/posts/':
            listeners.setCreatePostFormListener()
            //listeners.setupSearch()
            break;
        case '/post/edit/':
            listeners.setUpdatePostListener()
            listeners.setRemovePostListener()
            break;
        case '/profile/edit/':
            listeners.setUpdateProfileListener()
            break;
    }
}