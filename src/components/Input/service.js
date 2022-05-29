import ApiService from '../../global/services/ApiService';

class CountryByName extends ApiService {
    getCountriesByName = (name) => this.get({url: `name/${name}`});
    // getCountriesForRegions = (region) => this.get({url: `region/${region}`})
};

export default new CountryByName();