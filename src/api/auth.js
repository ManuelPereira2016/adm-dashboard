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

/**
 * Send an email to recovery the user password.
 * @returns {Promise}
 */
export function sendRecovery(email) {
    return doApiRequest('users/forgot', { email }, "POST");
}

/**
 * Send password and confirmed password to change.
 * @returns {Promise}
 */
export function changePassword(token, data) {
    return doApiRequest(`users/reset/${token}`, data, "POST");
}
