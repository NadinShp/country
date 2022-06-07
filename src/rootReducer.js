import {combineReducers} from 'redux';
import mainReducer from './containers/MainPage/reducer';
import filter from './components/Input/reducer';
import active from './components/CountryCard/reducer';
import region from './components/Select/reducer';
import theme from './components/AppBar/reducer';

export default combineReducers({
    mainReducer,
    filter,
    active,
    region,
    theme,
});