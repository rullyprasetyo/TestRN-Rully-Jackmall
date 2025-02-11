import axios from 'axios';
import { BASE_URL } from './env';
import { ToastMessage } from '../../Components';

const CONFIG_REQ = {
    validateStatus: function (status) {
        return true;
    },
    headers: {
        Accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `application/json`,
    },
};

const CHECK_REQUEST_CREDENTIAL = data => { };

const HANDLER_ERROR = (type = "GET", err, endpoint) => {
    ToastMessage({ type: 'error', textTitle: type && err, textMessage: endpoint })
}

const GET_REQ = async (endpoint, useFetch = false, bodyData, config = CONFIG_REQ) => {
    if (!useFetch) {
        return await axios.get(endpoint, { ...config, data: bodyData }).then(async res => {
            CHECK_REQUEST_CREDENTIAL(res?.data);
            return {
                data: res?.data || {},
                status: res?.status,
            }
        }).catch(err => HANDLER_ERROR("GET", err, endpoint));
    }

    const url = BASE_URL + endpoint;
    const headers = { ...config.headers };

    if (axios.defaults.headers.common['Authorization']) {
        headers.Authorization = axios.defaults.headers.common['Authorization'];

        return fetch(url, { method: 'GET', headers, body: bodyData })
            .then(r => r.json())
            .then(json => {
                return json;
            })
            .catch(err => HANDLER_ERROR("GET", err, endpoint));
    }
};

export {
    CONFIG_REQ,
    GET_REQ
}
