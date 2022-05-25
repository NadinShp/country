import { asyncActionsCreator } from '../../global/redux';
import  * as constants from './constants';

export const getCountries = asyncActionsCreator(constants.GET_COUNTRIES);