import fetch from 'cross-fetch';
import { getLoginToken } from '../utils/utils';

const API = 'http://vditelecom-env.5wedm2tsyp.us-east-1.elasticbeanstalk.com/';

/**
 * Method for making ajax calls to the site's api
 * @param {String} endpoint - the api endpoint
 * @param {Object|string} [data=null] - key:value pairs of the data to be sent to server
 * @param {String} [method=get] - the type of ajax request to make
 * @param {String} [contentType=json] - content type to send
 * @returns {Promise}
 */
export default async function doApiRequest(endpoint, data = null, method = 'GET', contentType = 'application/json') {
    let url = `${API}${endpoint}`;

    const authToken = getLoginToken();

    let options = {
        method,
        headers: {
            'token': `${authToken || ''}`,
            'Accept': 'application/json',
        },
        mode: 'cors',
        body: data === null || method === 'GET' ? undefined : (contentType === 'application/json' ? JSON.stringify(data) : data)
    };

    if (contentType !== 'multipart/form-data') {
        options.headers['Content-Type'] = contentType;
    }

    try {
        const response = await fetch(url, options);

        if (response.ok) {
            const result = await response.text();

            if (!result) {
                let error = new Error('Respuesta invalida desde el servidor.');

                error.response = response;
                throw error;
            }
            else {
                return JSON.parse(result);
            }
        }
        else {
            let error = new Error('Algo raro ocurrio con el servidor.');

            error.response = response;
            throw error;
        }
    }
    catch (err) {
        let error = new Error(err || 'Algo raro ocurrio con el servidor.');

        throw error;
    }
}
