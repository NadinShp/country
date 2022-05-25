import {createReducer} from '@redux/toolkit';
import * as actions from './actions';

const initialState = {
    loading: false,
    error: null,
    countries: null,
};

const mainReducer = createReducer(initialState, {
    [actions.getCountries.REQUEST]: (state) => {
        state.loading = true;
        state.error = null;
    },
    [actions.getCountries.SUCCESS]: (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.countries = payload;
    },
    [actions.getCountries.ERROR]: (state, {payload}) => {
        state.loading = false;
        state.error = payload;
    },
});

export default mainReducer;