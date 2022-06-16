import {useSelector} from 'react-redux';
import {memo} from 'react';
import mainPageSelectors from '../../containers/MainPage/selectors';
import {useNavigate, useParams} from 'react-router-dom';
import {valueFromObj, valueToString, valueInfo} from './helpers';
import Container from '../../components/Container';
import LinkButton from '../../components/LinkButton';
import style from './CountryPage.module.css'
import Error from '../../components/Error';

const CountryPage = () => {
    const countries = useSelector(mainPageSelectors.countries);
    const navigate = useNavigate();
    const { countryId } = useParams();
    let actualCountry = countries ? countries.find(country => country.id === countryId) : {};
    actualCountry = actualCountry ? actualCountry : {};
    let {name, flag, population, region, capital, subregion, borders, tld, nativeName, currencies, languages} = actualCountry;
    const mainInfo = {
        'native name': nativeName ? valueFromObj(nativeName, 'common') : '',
        'population': population,
        'region': region,
        'sub region': subregion,
        'capital': capital,
    };
    const addedInfo = {
        'top level domain': tld ? valueToString(tld) : '',
        'currencies': currencies ? valueFromObj(currencies, 'name'): '',
        'languages': languages ? valueInfo(languages) : '',
    }
    let sortedBorderArr;

    if(countries && borders) {
        sortedBorderArr = borders.map((border) => {
           return countries.find(({cca3}) => cca3 === border);
        }).map(country => ({name: country.name, kod: country.cca3}));
    };
    const arrInfo = Object.keys(mainInfo);
    const arrAddedInfo = Object.keys(addedInfo);
    return(
        <Container>
            <button className='backBtn' onClick={()=>navigate(-1)}>
                <ion-icon name='arrow-back-outline' />
                Back
            </button>
            {name ? (
                <main className={style.main}>
                    <img className={style.imgOneCountry} src={flag} alt={`flag of${name}`}/>
                    <div className={style.informationWrap}>
                        <div className={style.infoWrapper}>
                            <div className={style.wrapper}>
                                <p className={style.countryName}>{name}</p>
                                <ul>
                                    {arrInfo.map(info => (
                                        <li className={style.item} key={`${info} 1`}><p className={style.detailName}>{`${info}: `}<span className='detailInfo'>{mainInfo[info]}</span></p></li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <ul className={style.listWithAddInfo}>
                                    {arrAddedInfo.map(info => (
                                        <li key={`${info} 1`} className={style.item}><p className={style.detailName}>{`${info}: `}<span className='detailInfo'>{addedInfo[info]}</span></p></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={style.bordersWrapper}>
                            <p className={style.detailName}>Border countries: </p>
                            <ul className={style.borders}>
                                {sortedBorderArr && sortedBorderArr.map(border=>(
                                    <li key={border.kod} className='bordersItem'>
                                        <LinkButton to={`/${border.kod}`}>
                                            {border.name}
                                        </LinkButton>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </main>
            )
        : <Error message={`${countryId} not found`}/>}
        </Container>
    )
};

export default memo(CountryPage);