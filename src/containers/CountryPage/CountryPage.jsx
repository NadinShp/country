import {useSelector} from 'react-redux';
import {active} from './selectors';
import mainPageSelectors from '../../containers/MainPage/selectors';
import {useNavigate} from 'react-router-dom';
import {valueFromObj, valueToString, valueInfo} from './helpers';
import Container from '../../components/Container';
import style from './CountryPage.module.css'

const CountryPage = () => {
    const actualCountry = useSelector(active);
    const countries = useSelector(mainPageSelectors.countries);
    const navigate = useNavigate();
    const {name, flag, population, region, capital, subregion, borders, tld, nativeName, currencies, languages} = actualCountry;
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
    let namesOfBorders;

    if(countries) {
        namesOfBorders = borders.map((border) => {
           return countries.find(({cca3}) => cca3 === border);
        }).map(country => country.name);
    };
    // console.log('namesOfBorders', namesOfBorders);
    const arrInfo = Object.keys(mainInfo);
    const arrAddedInfo = Object.keys(addedInfo);
    return(
        <Container>
            <button className='backBtn' onClick={()=>navigate(-1)}>
                <ion-icon name='arrow-back-outline' />
                Back
            </button>
            {actualCountry && (
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
                                <ul>
                                    {arrAddedInfo.map(info => (
                                        <li key={`${info} 1`} className={style.item}><p className={style.detailName}>{`${info}: `}<span className='detailInfo'>{addedInfo[info]}</span></p></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={style.bordersWrapper}>
                            <p className={style.detailName}>Border countries: </p>
                            <ul className={style.borders}>
                                {namesOfBorders && namesOfBorders.map(border=>(
                                    <li key={border} className='bordersItem'>
                                        <button className='borderBtn'>{border}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </main>
            )}
        </Container>
    )
};

export default CountryPage;