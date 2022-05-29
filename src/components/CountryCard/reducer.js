import { createReducer } from "@reduxjs/toolkit";
import {chosenCountry} from './actions';

const active = createReducer('', {
    [chosenCountry]: (state, {payload}) => payload,
});

export default active;