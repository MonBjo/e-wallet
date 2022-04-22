import './Home.css';

import { useNavigate } from 'react-router-dom';

import Card from '../components/Card';
import CardStack from '../components/CardStack';
import Top from '../components/Top';

function Home() {
  const navigate = useNavigate();

  function navAddCard() {
    navigate('/addcard');
  }

  return (
    <article className="homePage">
      <Top title="E-Wallet" subtitle="Active card" />
      <Card />
      <CardStack />
      <button onClick={ navAddCard } className="button button--home" >Add a new card</button>
    </article>
  );
}

export default Home;