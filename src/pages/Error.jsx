import Wrapper from '../assets/wrappers/ErrorPage';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='not found' />
          <h3>Oj!</h3>
          <p>Nie udało nam się znaleźć strony, której szukasz ...</p>
          <Link to='/'>wróć do strony głównej</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Coś poszło nie tak </h3>
      </div>
    </Wrapper>
  );
};
export default Error;
