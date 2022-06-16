import {useDispatch} from 'react-redux';
import {chosenCountry} from '../../containers/MainPage/actions';
import style from './CountryCard.module.css';
import {useNavigate} from 'react-router-dom';
import '../../global/styles/index.css';

const CountryCard = ({country}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onBtnClickHandler = (id) => {
        navigate(id);
        dispatch(chosenCountry(country));
    }
    const {flag, name, population, region, capital, id} = country;
    return(
        <li className='itemCountry' onClick={()=>onBtnClickHandler(id)}>
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
