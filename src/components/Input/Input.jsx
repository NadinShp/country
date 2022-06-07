import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import {changeFilter} from './actions';
import {actualTheme} from '../AppBar/selectors';
import filterSelector from './selectors';
import { ThemeProvider  } from '@mui/material/styles';
import {theme} from './theme';
import '../../global/styles/index.css';

const Input = () => {
    const dispatch = useDispatch();
    const filter = useSelector(filterSelector.filterValue);
    const activeTheme = useSelector(actualTheme) || 'light';
    const onChangeFilterValue = useCallback(
        e => {
          dispatch(changeFilter(e.target.value));
        },
        [dispatch],
    );
    return (
        <ThemeProvider  theme={theme}>
            <div className='filterByName'>
                <OutlinedInput
                    variant={activeTheme}
                    placeholder="Search for a country"
                    name = 'countryName'
                    value = {filter}
                    className="filterInput"
                    onChange = {onChangeFilterValue}
                    autoFocus
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon className='iconSearch'/>
                        </InputAdornment>
                    }
                />
            </div>
        </ThemeProvider >
    )
};

export default Input;