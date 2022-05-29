import {createReducer} from '@reduxjs/toolkit';
import {choseRegion} from './actions';

const region = createReducer('', {
    [choseRegion]: (_, {payload}) => payload,
});

export default region;