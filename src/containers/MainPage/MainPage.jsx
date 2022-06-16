import { useSelector} from 'react-redux';
import mainPageSelectors from './selectors';
import CountryList from '../../components/CountryList';
import Container from '../../components/Container';
import Error from '../../components/Error';
import AppBar from '../../components/AppBar';

const MainPage = () => {
    const countries = useSelector(mainPageSelectors.countries);
    const error = useSelector(mainPageSelectors.error);

    return(
        <Container>
            {error && (<Error message='Something is wrong. Try later' error={504}/>)}
            {countries && (
            <>
                <AppBar />
                <CountryList />
            </>
            )}
        </Container>
    )
};

export default (MainPage);