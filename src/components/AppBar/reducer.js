import { createReducer } from "@reduxjs/toolkit";
import {chooseTheme} from './actions';

const theme = createReducer('', {
    [chooseTheme]: (_, {payload}) => payload,
});

export default theme;