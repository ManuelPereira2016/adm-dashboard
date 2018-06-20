import doApiRequest from './doApiRequest';

/**
 * Validate user dni/cuil
 * @returns {Promise}
 */
export function validate(data) {
    return doApiRequest('validation', data, 'POST');
}
