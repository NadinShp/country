import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import mainPageSelectors from '../../containers/MainPage/selectors';
import CountryCard from '../CountryCard';
import {filteredCountriesByRegion} from './helper';
import {region} from '../Select/selectors';
import filterSelector from '../Input/selectors';
import  '../../global/styles/index.css';

const CountryList = () => {
    const navigate = useNavigate();
    const countries = useSelector(mainPageSelectors.countries);
    const filter = useSelector(filterSelector.filterValue);
    const chosenRegion = useSelector(region);
    let filteredArr;
    let filteredCountriesByRegionAndName;
    if (countries){
        filteredArr = countries.filter(country=> country.name.toLowerCase().includes(filter.toLowerCase()));
    }
    if (filteredArr) {
        filteredCountriesByRegionAndName = filteredCountriesByRegion(filteredArr, chosenRegion);
    }
    const onBtnClickHandler = (id) => {
        navigate(id);
    }
    return (
        <ul className='countryList'>
        {filteredCountriesByRegionAndName.map((country) => (
            <CountryCard onClick={onBtnClickHandler} key={country.id} country={country} />
        ))}
        </ul>
    )
};

export default CountryList;