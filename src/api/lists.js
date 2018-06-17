import doApiRequest from './doApiRequest';

/**
 * Put an user on lista negra
 * @param {Object} data { dni, sexo, motivo }
 * @returns {Promise}
 */
export function putUserBlackList(data) {
    return doApiRequest('users/listanegra', data, 'POST');
}

/**
 * Put an user on lista blanca
 * @param {Object} data { dni, sexo, motivo }
 * @returns {Promise}
 */
export function putUserWhiteList(data) {
    return doApiRequest('users/listablanca', data, 'POST');
}

/**
 * Get all users from lista negra
 * @returns {Promise}
 */
export function getBlackListUsers() {
    return doApiRequest('users/getlistanegra');
}

/**
 * Get all users from lista blanca`
 * @returns {Promise}
 */
export function getWhiteListUsers() {
    return doApiRequest('users/getlistablanca');
}

/**
 * Delete an user from lista negra
 * @param {Object} data { id }
 * @returns {Promise}
 */
export function deleteUserBlackList(data) {
    return doApiRequest('users/deletelistanegra', data, 'POST');
}

/**
 * Delete an user from lista blanca
 * @param {Object} data { id }
 * @returns {Promise}
 */
export function deleteUserWhiteList(data) {
    return doApiRequest('users/deletelistablanca', data, 'POST');
}
