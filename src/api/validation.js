import doApiRequest from './doApiRequest';

/**
 * Validate user dni/cuil
 * @returns {Promise}
 */
export function validate(data) {
    return doApiRequest('validation', data, 'POST');
}

/**
 * Validate user dni/cuil
 * @returns {Promise}
 */
export function revenge(data) {
    return doApiRequest('revancha', data, 'POST');
}
