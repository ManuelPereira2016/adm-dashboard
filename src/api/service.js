import doApiRequest from './doApiRequest';

/**
 * Get all services
 * @returns {Promise}
 */
export function getServices() {
    return doApiRequest('users/servicio');
}
