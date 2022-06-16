import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {Audio} from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = () => (
  <div className={style.loader}>
    <Audio
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading' />
  </div>
);
export default Loader;