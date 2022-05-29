import '../../global/styles/index.css';
import {useDispatch} from 'react-redux';
import {chosenCountry} from '../CountryCard/actions';
import style from './CountryCard.module.css';

const CountryCard = ({country, onClick}) => {
    const dispatch = useDispatch();
    const onCountryClick = () => {
        dispatch(chosenCountry(country));
        onClick(country.id);
    }
    const {flag, name, population, region, capital} = country;
    return(
        <li className='itemCountry' onClick={onCountryClick}>
            <img className={style.image} src={flag} alt={name}/>
            <div className={style.wrapperItem}>
                <p className={style.countryName}>{name}</p>
                <ul>
                    <li className={style.nameTypeInfo}>Population: <span className='countryInfo'>{population}</span></li>
                    <li className={style.nameTypeInfo}>Region: <span className='countryInfo'>{region}</span></li>
                    <li className={style.nameTypeInfo}>Capital: <span className='countryInfo'>{capital}</span></li>
                </ul>
            </div>
        </li>
    )
};

export default CountryCard;
