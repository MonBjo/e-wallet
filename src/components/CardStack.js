import './CardStack.css';

import Card from './Card';

// TODO: Hämta korten från localStorage och visa

function CardStack() {
  return (
    <section className="cards">
      < Card />
      < Card />
      < Card />
    </section>
  );
}

export default CardStack;