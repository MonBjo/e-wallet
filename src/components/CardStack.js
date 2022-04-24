import './CardStack.css';

import Card from './Card';

function CardStack() {
  const cardStack = JSON.parse(localStorage.cardStack);
  const cardItems = cardStack.map((card) => { 
    console.log(card);
    
    return <Card 
    number={ card.number } 
    name={ card.name }
    endDate={ card.endDate } 
    vendor={ card.vendor } />
  });

  return (
    <section className="cards">
      { cardItems }
    </section>
  );
}

export default CardStack;