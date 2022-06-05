import axios from 'axios';
import { stringify } from 'qs';

const instance = axios.create({
    withCredentials: true,
    paramsSerializer: params => stringify(params, { arrayFormat: 'repeat' }),
    validateStatus: () => true,
});

class AxiosInstance {
    async request(method, url, data = {}) {
        const inputMethod = method.toLowerCase();

        if (!this._validateRequestMethod(inputMethod)) {
            throw new Error('올바른 요청이 아닙니다.');
        }

        if (this._isNeededToBeSerialize(inputMethod)) {
            return instance.request({
                method,
                url,
                params: { ...data, currentTime: Date.now() },
            });
        }

        return instance.request({ method, url, data });
    }

    _validateRequestMethod(method) {
        return ['get', 'post', 'patch', 'put', 'delete'].includes(method);
    }

    _isNeededToBeSerialize(method) {
        return ['get', 'delete'].includes(method);
    }
}

export const axiosInstance = new AxiosInstance();