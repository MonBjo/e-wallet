import './CardForm.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CardForm() {
  const navigate = useNavigate();
  
  const [number, setCardnumber] = useState();
  const [name, setName] = useState();
  const [endDate, setEndDate] = useState();
  const [ccv, setCcv] = useState();
  const [vendor, setVendor] = useState();

  console.log(number, name, endDate, ccv, vendor);

  function getCardnumber(event) {
    try {
      setCardnumber(event.target.value);
    } catch(error) {
      console.log(error);
    }
  }

  function getName(event) {
    try {
      setName(event.target.value);
    } catch(error) {
      console.log(error);
    }
  }

  function getEndDate(event) {
    try {
      setEndDate(event.target.value);
    } catch(error) {
      console.log(error);
    }
  }

  function getCcv(event) {
    try {
      setCcv(event.target.value);
    } catch(error) {
      console.log(error);
    }
  }
  
  function getVendor(event) {
    try {
      setVendor(event.target.value);
    } catch(error) {
      console.log(error);
    }
  }

  function submitForm(event) {
    event.preventDefault();
    console.log(event);
    //navHome();
  }

  function navHome() {
    navigate('/');
  }


  return (
    <form className="form">
        <p className="form--title">Card number</p>
        <input className="form--input" type="text" value="0000 0000 0000 0000" onChange={ getCardnumber() } />

        <p className="form--title">Cardholder name</p>
        <input className="form--input" type="text" placeholder='John Doe' onChange={ getName() } />

        <section className="form--smallFields">
          <p className="form--title">Valid thru</p>
          <input className="form--input" type="text" onChange={ getEndDate() } />

          <p className="form--title">CCV</p>
          <input className="form--input" type="number" onChange={ getCcv() } />
        </section>

        <p className="form--title">Vendor</p>
        <select className="form--input" onChange={ getVendor() } >
          <option value="DEFAULT"></option>
          <option value="one">Bitcoin</option>
          <option value="two">Blockchain</option>
          <option value="three">Evil</option>
          <option value="four">Ninja</option>
        </select> 

        <button onClick={ submitForm } className="button button--form" >Add card</button>
      </form>
  );
}

export default CardForm;