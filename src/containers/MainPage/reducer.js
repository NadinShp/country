import { createReducer } from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {getCountries, chooseTheme, choseRegion, changeFilter, chosenCountry} from './actions';

const initialState = {
    loading: false,
    error: null,
    countries: null,
};

const mainReducer = createReducer(initialState, {
    [getCountries.REQUEST]: (state) => {
        state.loading = true;
        state.error = null;
    },
    [getCountries.SUCCESS]: (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.countries = payload;
    },
    [getCountries.ERROR]: (state, {payload}) => {
        state.loading = false;
        state.error = payload;
    },
});

const theme = createReducer('', {
    [chooseTheme]: (_, {payload}) => payload,
});

const region = createReducer('', {
    [choseRegion]: (_, {payload}) => payload,
});

const filter = createReducer('', {
    [changeFilter]: (_, {payload}) => payload,
});

const active = createReducer('', {
    [chosenCountry]: (_, {payload}) => payload,
});

const mainPageReducer = combineReducers({
    mainReducer,
    theme,
    region,
    filter,
    active
});

export default mainPageReducer;