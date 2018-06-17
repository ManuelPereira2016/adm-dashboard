const appId = 'tuid_token';

export function saveLoginToken(loginToken) {
    window.localStorage.setItem(appId, `${loginToken}`);
}

export function getLoginToken() {
    let token = window.localStorage.getItem(appId);

    return token;
}

export function removeLoginToken() {
    window.localStorage.removeItem(appId);
}
