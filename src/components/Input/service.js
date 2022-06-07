import ApiService from '../../global/services/ApiService';

class CountryByName extends ApiService {
    getCountriesByName = (name) => this.get({url: `name/${name}`});
};

export default new CountryByName();