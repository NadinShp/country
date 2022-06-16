const countries = (state) => state.mainPageReducer.mainReducer.countries;
const loading = (state) => state.mainPageReducer.mainReducer.loading;
const error = (state) => state.mainPageReducer.mainReducer.error;
const actualTheme = (state) => state.mainPageReducer.theme.payload;
const region = (state) => state.mainPageReducer.region;
const filterValue = (state) => state.mainPageReducer.filter;

const mainPageSelectors = {
    countries,
    actualTheme,
    region,
    filterValue,
    loading,
    error,
};

export default mainPageSelectors;