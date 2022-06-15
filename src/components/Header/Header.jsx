import Container from '../Container';
import {Link} from 'react-router-dom';
import style from './Header.module.css';
import '../../global/styles/index.css';

const Header = ({onClick, isDark}) => {
    return(
        <header className='wrapperHeader'>
            <Container>
                <div className={style.header}>
                    <h1 className={style.title}>
                        <Link to = '/' className={style.linkOnMainPage}>Where in the world?</Link>
                    </h1>
                    <button
                        type='button'
                        className={style.modeBtn}
                        onClick={onClick}>
                            {isDark ? <ion-icon name='moon' /> : <ion-icon name='moon-outline' />}
                        Dark Mode
                    </button>
                </div>
            </Container>
        </header>
    )
};

export default Header;
