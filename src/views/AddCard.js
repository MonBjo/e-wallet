import './AddCard.css';

import Top from '../components/Top';
import Card from '../components/Card';
import CardForm from '../components/CardForm';

function AddCard(props) {

  return (
    <article className="addCardPage">
      <Top title="Add a new bank card" subtitle="new card" />
      <Card 
      number="0000 0000 0000 0000" 
      name="John Doe" 
      endDate="01/23" 
      vendor="placeholder" />
      
      <CardForm />
    </article>
  );
}

export default AddCard;