
import axios from 'axios';

export default class ApiService {
    _DEFAULT_OPTIONS = {
        url: '',
        body: null,
        headers: {},
        base_api_url: 'https://restcountries.com/v3.1/',
    };

    get(options = {}) {
        const newOptions={ ...this._DEFAULT_OPTIONS, ...options};
        return axios.get(`${newOptions.base_api_url}${newOptions.url}`,{
        headers: newOptions.headers,
        })
    }
}