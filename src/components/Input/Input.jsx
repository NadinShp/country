import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import {changeFilter} from './actions';
import filterSelector from './selectors';
import '../../global/styles/index.css';

const Input = () => {
    const dispatch = useDispatch();
    const filter = useSelector(filterSelector.filterValue);
    const onChangeFilterValue = useCallback(
        e => {
          dispatch(changeFilter(e.target.value));
        },
        [dispatch],
    );
    return (
        <div className='filterByName'>
            <OutlinedInput
                className='inputSearch'
                placeholder="Search for a country"
                name = 'countryName'
                value = {filter}
                onChange = {onChangeFilterValue}
                autoFocus
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon className='iconSearch'/>
                    </InputAdornment>
                }
            />
        </div>
    )
};

export default Input;