export const filteredCountriesByRegion = (arr, region) => {
    if(region === 'All' || region === ''){
        return arr;
    };
    return arr.filter(county => county.region === region);
};