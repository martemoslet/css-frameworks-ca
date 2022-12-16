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
            break;
        case '/post/edit/':
            listeners.setUpdatePostListener()
            break;
        case '/profile/edit/':
            listeners.setUpdateProfileListener()
            break;
        case '/post/':
            listeners.setRemovePostListener()
            break;
    }
}