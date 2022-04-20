import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

function AddCard() {
  const navigate = useNavigate();

  function navHome() {
    navigate('/');
  }

  return (
    <section>
      <Card />
      <p>le form here plz</p>
      <button onClick={ navHome } >Add card</button>
    </section>
  );
}

export default AddCard;