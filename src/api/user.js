import doApiRequest from './doApiRequest';

/**
 * Register a new user
 * @param {Object} data
 * @returns {Promise}
 */
export function register(data) {
    return doApiRequest('users/register', data, 'POST');
}

/**
 * Update's an existing user
 * @param {Object} data
 * @returns {Promise}
 */
export function updateUser(data) {
    return doApiRequest('users/update', data, 'POST');
}

/**
 * Get all users
 * @returns {Promise}
 */
export function getUsers() {
    return doApiRequest('users/getUsers');
}
