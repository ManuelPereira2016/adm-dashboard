import doApiRequest from './doApiRequest';

/**
 * Get questions
 * @returns {Promise}
 */
export function getQuestions(id) {
    return doApiRequest('users/question');
}
