import { useSelector} from 'react-redux';
import mainPageSelectors from './selectors';
import CountryList from '../../components/CountryList';
import Container from '../../components/Container';
import AppBar from '../../components/AppBar';

const MainPage = () => {
    const countries = useSelector(mainPageSelectors.countries);

    return(
        <Container>
            <AppBar />
            {countries && <CountryList />}
        </Container>
    )
};

export default (MainPage);