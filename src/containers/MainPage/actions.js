import { asyncActionsCreator } from '../../global/redux';
import {createAction} from '@reduxjs/toolkit';
import  * as constants from './constants';

export const chooseTheme = createAction('theme/chooseTheme');
export const choseRegion = createAction('countries/choseRegion');
export const changeFilter = createAction('countries/filterCountries');
export const chosenCountry = createAction('countries/chosenCountry');
export const getCountries = asyncActionsCreator(constants.GET_COUNTRIES);