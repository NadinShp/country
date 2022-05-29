import img404 from '../../images/img404.svg';
import style from './Error.module.css';

const Error = ({message}) => {
    return (
        <div className={style.error}>
            <img className={style.img_error} src={img404} alt="Illustration" />
            <a
                target = "_blank"
                rel = "noreferrer"
                href = "https://storyset.com/online"
                className={style.icon_attribute}
            >
            Online illustrations by Storyset
            </a>
            <h2 className="error__text">{message}</h2>
        </div>
    );
}

export default Error;