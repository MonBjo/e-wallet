import './CardStack.css';

import Card from './Card';

// TODO: Hämta korten från localStorage och visa

function CardStack() {
  return (
    <section className="cards">
      <Card 
      number={"0000 0000 0000 0000"} 
      name="John Doe" 
      valid="01/23" 
      vendor="Bitcoin" />
      <Card 
      number={"0000 0000 0000 0000"} 
      name="John Doe" 
      valid="01/23" 
      vendor="Blockchain" />
      <Card 
      number={"0000 0000 0000 0000"} 
      name="John Doe" 
      valid="01/23" 
      vendor="Evil" />
      <Card 
      number={"0000 0000 0000 0000"} 
      name="John Doe" 
      valid="01/23" 
      vendor="Ninja" />
    </section>
  );
}

export default CardStack;