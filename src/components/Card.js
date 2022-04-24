import './Card.css';

import Wifi from '../assets/wifi.svg';
import ChipDark from '../assets/._chip-dark.svg';
import ChipLight from '../assets/._chip-light.svg';

import Bitcoin from '../assets/._vendor-bitcoin.svg';
import Blockchain from '../assets/._vendor-blockchain.svg';
import Evil from '../assets/._vendor-evil.svg';
import Ninja from '../assets/._vendor-ninja.svg';
import { useState } from 'react';

function Card(props) {
  let {number, name, endDate, vendor, background, chip } = props;
  const [classNames, setClassNames] = useState('card');
  setCardColor();
  setChipColor();
  setVendorLogo();
  
  function setCardColor() {
    if( vendor === "Bitcoin") {
      background = "#FFAE34";
    } else if(vendor === "Blockchain") {
      background = "#8B58F9";
    } else if(vendor === "Evil"){
      background = "#F33355";
    } else if(vendor === "Ninja"){
      background = "#222222";
    } else {
      background = "gray";
    }
  }
  
  function setChipColor() {   
    if( vendor === "Bitcoin" || vendor === "Evil" || vendor === "Ninja") {
      chip = ChipLight;
    } else {
      chip = ChipDark;
    }
  }
  
  function setVendorLogo() {
    if( vendor === "Bitcoin") {
      vendor = Bitcoin;
    } else if(vendor === "Evil"){
      vendor = Evil;
    } else if(vendor === "Blockchain") {
      vendor = Blockchain;
    } else if(vendor === "Ninja"){
      vendor = Ninja;
    } else {
      vendor = Bitcoin;
    }  
  }
  
  function cardClick() {
    let cards = document.querySelectorAll('.card');
    for(let card of cards) {
      card.className = 'card';
    }

    setClassNames(classNames + ` activeCard`);
  }

  return (
    <article className={classNames} style={{backgroundColor: background}} onClick={ cardClick } >
      <section className="card--connection">
        <img src={ Wifi } alt='wifi icon' className="card--wifi" />
        <img src={ chip } alt='chip' className="card--chip" />
      </section>
      <img src={ vendor } alt="vendor logo" className="card--vendor" />
      
      <h2 className="card--number">{ number }</h2>

      <section className="card--name">
        <h3 className='card--title'>Cardholder name</h3>
        <p className='card--info'>{ name }</p>
      </section>

      <section className="card--date">
        <h3 className="card--title">Valid thru</h3>
        <p className='card--info'>{ endDate }</p>
      </section>
    </article>
  );
}

export default Card;