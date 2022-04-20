import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import CardStack from '../components/CardStack';

function Home() {
  const navigate = useNavigate();

  function navAddCard() {
    navigate('/addcard');
  }

  return (
    <section>
      < Card />
      < CardStack />
      <button onClick={ navAddCard } >Add a new card</button>
    </section>
  );
}

export default Home;