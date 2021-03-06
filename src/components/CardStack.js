import './CardStack.css';

import Card from './Card';

function CardStack(props) {
  const { newAmountOfCards } = props;
  const cardStack = JSON.parse(localStorage.cardStack);

  if(newAmountOfCards !== cardStack.length){
    const cardItems = cardStack.map((card) => { 
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
}

export default CardStack;