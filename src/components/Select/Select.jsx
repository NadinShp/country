import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {choseRegion} from './actions';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectRegion = () => {
    const dispatch = useDispatch();
    const [region, setRegion] = useState('');
    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    const handleChange = (event) => {
        setRegion(event.target.value);
    };
    useEffect(() => {
        dispatch(choseRegion(region));
    }, [dispatch, region]);
    return (
        <Box sx={{ minWidth: 200 }}>
        <FormControl fullWidth>
            <InputLabel id="select">Filter by region</InputLabel>
            <Select
            labelId="select"
            id="demo-simple-select"
            value={region}
            label="Filter by region"
            onChange={handleChange}
            >
                {regions.map((region) => (
                    <MenuItem value={region} key={region}>
                    {region}
                </MenuItem>
                ))}
            </Select>
        </FormControl>
        </Box>
    );
};
export default SelectRegion;