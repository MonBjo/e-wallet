import './Card.css';

import Wifi from '../assets/wifi.svg';
import ChipDark from '../assets/._chip-dark.svg';
import Bitcoin from '../assets/._vendor-bitcoin.svg';

function Card() {
  return (
    <article className="card">
      <section className="card--connection">
        <img src={ Wifi } alt='wifi icon' className="card--wifi" />
        <img src={ ChipDark } alt='chip' className="card--chip" />
      </section>
      <img src={ Bitcoin } alt='bitcoin logo' className="card--vendor" />
      
      <h2 className="card--number">1234 5678 9012 3456</h2>

      <section className="card--name">
        <h3 className='card--title'>Cardholder name</h3>
        <p className='card--info'>John Doe</p>
      </section>

      <section className="card--date">
        <h3 className="card--title">Valid thru</h3>
        <p className='card--info'>10/24</p>
      </section>
    </article>
  );
}

export default Card;