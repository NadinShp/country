import ApiService from '../../global/services/ApiService';
import constants from './constants';

class MainPageService extends ApiService {
    getCountries = () => this.get({url: `all?${constants.FIELDS}`});
};

export default new MainPageService();
