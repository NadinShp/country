import { useSelector} from 'react-redux';
import mainPageSelectors from './selectors';
import CountryList from '../../components/CountryList';
import Container from '../../components/Container';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import AppBar from '../../components/AppBar';

const MainPage = () => {
    const countries = useSelector(mainPageSelectors.countries);
    const loader = useSelector(mainPageSelectors.loading);
    const error = useSelector(mainPageSelectors.error);

    return(
        <Container>
            {loader && (<Loader />)}
            {error && (<Error message='Something is wrong. Try later' error={504}/>)}
                {/* <div>
                    <h>Something is wrong</h>
                </div>
            )} */}
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