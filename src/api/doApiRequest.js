// import fetch from 'cross-fetch';
import axios from 'axios';
import { getLoginToken } from '../utils/utils';

const API = 'https://api2.auntenticartuid.com/';

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
        url,
        method,
        headers: {
            'token': `${authToken || ''}`,
            'Accept': 'application/json',
        },
        data: data === null || method === 'GET' ? undefined : (contentType === 'application/json' ? JSON.stringify(data) : data)
    };

    if (contentType !== 'multipart/form-data') {
        options.headers['Content-Type'] = contentType;
    }

    try {
        const response = await axios(options);

        // if (!response.data.error) {
        if (response.data) {
            return response.data;
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
