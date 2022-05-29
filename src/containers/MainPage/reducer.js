import { createReducer } from '@reduxjs/toolkit';
import {getCountries} from './actions';

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

export default mainReducer;