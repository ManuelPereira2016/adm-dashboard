import doApiRequest from './doApiRequest';

/**
 * Set questions for an user providing dni, sexo and servicio.
 * @returns {Promise}
 */
export function setQuestions(data) {
    return doApiRequest('questions', data, "POST");
}
