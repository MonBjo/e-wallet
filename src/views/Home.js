import './Home.css';

import { useNavigate } from 'react-router-dom';

import CardStack from '../components/CardStack';
import Top from '../components/Top';

function Home() {
  const navigate = useNavigate();

  function navAddCard() {
    navigate('/addcard');
  }

  function removeCard(event) {
    event.preventDefault();
    const cardToRemove = document.querySelector('.activeCard');
    if(cardToRemove == null) {
      alert("Please select a card to delete it.");
    } else {
      const cardNumberToRemove = cardToRemove.querySelector('.card--number').innerHTML;
      
      const cardStack = JSON.parse(localStorage.cardStack);
      const newCardStack = cardStack.filter(card => card.number !== cardNumberToRemove);
      console.log(newCardStack);
        
      localStorage.clear();
      localStorage.setItem("cardStack", JSON.stringify(newCardStack));
    }
  }
  
  return (
    <article className="homePage">
      <Top title="E-Wallet" subtitle="Active card" />
      
      <CardStack />

      <section className="homePage--buttons">
        <button onClick={ navAddCard } className="button button--home" >Add a new card</button>
        <button onClick={ removeCard } className="button button--home" >Delete active card</button>
      </section>
    </article>
  );
}

export default Home;