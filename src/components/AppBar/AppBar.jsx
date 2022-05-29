import Input from '../Input';
import SelectRegion from '../Select';
import style from './AppBar.module.css';

const AppBar = () => {
    return(
        <div className={style.wrapper}>
            <Input />
            <SelectRegion />
        </div>
    )
};

export default AppBar;