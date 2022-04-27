import './CardStack.css';

import Card from './Card';

function CardStack(props) {
  const { newAmountOfCards } = props;
  const cardStack = JSON.parse(localStorage.cardStack);


  if(newAmountOfCards !== cardStack.length){
    const cardItems = cardStack.map((card) => { 
      return <Card 
      cardsInStack={ cardStack }
      number={ card.number } 
      name={ card.name }
      endDate={ card.endDate } 
      vendor={ card.vendor } />
    });
    
    console.log("Do I get this prop, hmm? ", cardStack);
    
    return (
      <section className="cards" >
        { cardItems }
      </section>
    );
  }
}

export default CardStack;