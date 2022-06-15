const countries = (state) => state.mainPageReducer.mainReducer.countries;
const actualTheme = (state) => state.mainPageReducer.theme.payload;
const region = (state) => state.mainPageReducer.region;
const filterValue = (state) => state.mainPageReducer.filter;

const mainPageSelectors = {
    countries,
    actualTheme,
    region,
    filterValue,
};

export default mainPageSelectors;