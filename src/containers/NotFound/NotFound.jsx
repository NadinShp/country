import Error from '../../components/Error';
import Container from '../../components/Container';

const NotFound = ({ name = 'Page' }) => {
  return (
    <Container>
      <Error
        message={`${name} not found!`}
      />
    </Container>
  );
};

export default NotFound;