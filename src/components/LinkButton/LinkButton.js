import { Link } from 'react-router-dom';
import '../../global/styles/index.css';

const LinkButton = ({ to, children }) => {
  return (
    <Link to={to} className='borderBtn'>
      {children}
    </Link>
  );
};

export default LinkButton;