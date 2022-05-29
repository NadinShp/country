const helper = (data) => {
    const {name, flags, population, region, capital, subregion, borders, tld, cca3, currencies, languages} = data;
    const {official, nativeName} = name;
    return {
        name: official,
        flag: flags.svg,
        population,
        region,
        capital: capital ? capital[0] : 'not information',
        id: cca3,
        subregion,
        borders,
        tld,
        nativeName,
        cca3,
        currencies,
        languages
    }
};

export default helper;
