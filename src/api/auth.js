import doApiRequest from './doApiRequest';

/**
 * Login user with email and password
 * @param {String} email
 * @param {String} password
 * @returns {Promise}
 */
export function login(email, password) {
    return doApiRequest('users/login', { email, password }, 'POST');
}

/**
 * Get the user authed data
 * @returns {Promise}
 */
export function getAuthData() {
    return doApiRequest('users/auth');
}
