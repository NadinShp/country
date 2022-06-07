import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {choseRegion} from './actions';
import FilterItem from './FilterItem';
import style from './Select.module.css';

const SelectRegion = () => {
    const dispatch = useDispatch();
    const [region, setRegion] = useState('All');
    const [showFilter, setShowFilter] = useState(false);
    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    const filterClickHandler = () => {
        setShowFilter(()=>setShowFilter(!showFilter));
    }
    const handleChange = (event) => {
        setRegion(event.target.value);
        filterClickHandler();
    };
    useEffect(() => {
        dispatch(choseRegion(region));
    }, [dispatch, region]);
    return (
    <div className={style.select}>
        <div className="selectHeader" onClick={filterClickHandler}>
            {region === 'All' ? 'Filtered by Region' : region}
            {showFilter ? (
                <ion-icon name="chevron-up-outline"></ion-icon>
            ) : (
                <ion-icon name="chevron-down-outline"></ion-icon>
            )}
        </div>
        {showFilter && (
        <div className="selectBox" onChange={handleChange}>
            <div className="optionsContainer">
            {regions.map(region => (
            <FilterItem key={region} value={region}/>
            ))}
            </div>
        </div>
        )}
    </div>
    );
};

export default SelectRegion;