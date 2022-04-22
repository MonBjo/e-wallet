import './AddCard.css';

import Top from '../components/Top';
import Card from '../components/Card';
import CardForm from '../components/CardForm';

function AddCard() {

  return (
    <article className="addCardPage">
      <Top title="Add a new bank card" subtitle="new card" />
      <Card number="1234 5678 9024 6803" name="John Doe" valid="11/24" vendor="Bitcoin" />
      <CardForm />
    </article>
  );
}

export default AddCard;