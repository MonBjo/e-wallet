import './CardStack.css';

import Card from './Card';

function CardStack(props) {
  const { newAmountOfCards } = props;
  const cardStack = JSON.parse(localStorage.cardStack);
  
  console.log("amountOfCards: ", newAmountOfCards);
  console.log("cardStack.length: ", cardStack.length);

  if(newAmountOfCards !== cardStack.length){
    const cardItems = cardStack.map((card) => { 
      //console.log(card);
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