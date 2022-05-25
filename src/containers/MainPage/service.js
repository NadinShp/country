import ApiService from '../../global/services/ApiService';

class MainPageService extends ApiService {
    getCountries = () => this.get({url: ''});
};

export default new MainPageService();