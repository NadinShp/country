import img404 from '../../images/img404.svg';
import img504 from '../../images/img504.svg';
import style from './Error.module.css';

const Error = ({message='Something is wrong', error=404}) => {
    let image = error===404 ? img404 : img504;
    let name = error===404 ? 'online' : 'internet';
    return (
        <div className={style.error}>
            <img className={style.img_error} src={image} alt="Illustration" />
            <a
                target = "_blank"
                rel = "noreferrer"
                href = {`https://storyset.com/${name}`}
                className={style.icon_attribute}
            >
            Online illustrations by Storyset
            </a>
            <h2 className="error__text">{message}</h2>
        </div>
    );
}

export default Error;