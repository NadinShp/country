import {useSelector} from 'react-redux';
import mainPageSelectors from '../../containers/MainPage/selectors';
import CountryCard from '../CountryCard';
import {filteredCountriesByRegion} from './helper';
import  '../../global/styles/index.css';

const CountryList = () => {
    const countries = useSelector(mainPageSelectors.countries);
    const filter = useSelector(mainPageSelectors.filterValue);
    const chosenRegion = useSelector(mainPageSelectors.region);
    let filteredArr;
    let filteredCountriesByRegionAndName;
    if (countries){
        filteredArr = countries.filter(country=> country.name.toLowerCase().includes(filter.toLowerCase()));
    }
    if (filteredArr) {
        filteredCountriesByRegionAndName = filteredCountriesByRegion(filteredArr, chosenRegion);
    }
    return (
        <ul className='countryList'>
        {filteredCountriesByRegionAndName.map((country) => (
            <CountryCard key={country.id} country={country} />
        ))}
        </ul>
    )
};

export default CountryList;