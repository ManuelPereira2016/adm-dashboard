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

/**
 * Get dashboard data
 * @returns {Promise}
 */
export function getDashboard() {
    return doApiRequest('users/dashboard');
}

/**
 * Get config
 * @returns {Promise}
 */
export function getConfig(servicio) {
    return doApiRequest('users/config', { servicio }, 'POST');
}

/**
 * Save config
 * @returns {Promise}
 */
export function saveConfig(data) {
    return doApiRequest('users/uconfig', data, 'POST');
}
