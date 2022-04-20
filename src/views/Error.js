import './Error.css';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  function navHome() {
    navigate('/');
  }

  return (
    <article className="errorpage">
      <img src="https://i.imgur.com/VsX07cZ.gif" alt="le gif" />
      <button onClick={ navHome } >Go home</button>
    </article>
  );
}

export default Error;