import {createAction} from '@reduxjs/toolkit';

export const changeFilter = createAction('countries/filterCountries');
export const toggle = createAction('countries/toggleTheme');