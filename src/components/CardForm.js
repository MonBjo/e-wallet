import './CardForm.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CardForm() {
  const navigate = useNavigate();
  
  const [number, setCardnumber] = useState("");
  const [name, setName] = useState("");
  const [endDate, setEndDate] = useState("");
  const [ccv, setCcv] = useState("");
  const [vendor, setVendor] = useState("");

  function getCardnumber(event) {
    try {
      setCardnumber(event.target.value);
    } catch(error) {
      console.log("getCardnumber error: ", error);
    }
  }

  function getName(event) {
    try {
      setName(event.target.value);
    } catch(error) {
      console.log("getName error: ", error);
    }
  }

  function getEndDate(event) {
    try {
      setEndDate(event.target.value);
    } catch(error) {
      console.log("getEndDate error: ", error);
    }
  }

  function getCcv(event) {
    try {
      setCcv(event.target.value);
    } catch(error) {
      console.log("getCcv error: ", error);
    }
  }
  
  function getVendor(event) {
    try {
      setVendor(event.target.value);
    } catch(error) {
      console.log("getVendor error: ", error);
    }
  }

  function submitForm(event) {
    event.preventDefault();

    let newCardStack = getCardStack();
    newCardStack.push({
      number: number, 
      name: name,
      endDate: endDate,
      vendor: vendor,
      ccv: ccv 
    });
    localStorage.setItem("cardStack", JSON.stringify(newCardStack));
    
    console.log(newCardStack);
    navHome();
  }

  function navHome() {
    navigate('/');
  }
  function getCardStack() {
    const cardStack = JSON.parse(localStorage.cardStack);
    localStorage.clear();
    return cardStack;
  }

  return (
    <form className="form">
        <p className="form--title">Card number</p>
        <input className="form--input" type="text" value={ number } onChange={ getCardnumber } />

        <p className="form--title">Cardholder name</p>
        <input className="form--input" type="text" placeholder='John Doe' value={ name } onChange={ getName } />

        <section className="form--smallFields">
          <p className="form--title">Valid thru</p>
          <input className="form--input" type="text" value={ endDate } onChange={ getEndDate } />

          <p className="form--title">CCV</p>
          <input className="form--input" type="number" value={ ccv } onChange={ getCcv } />
        </section>

        <p className="form--title">Vendor</p>
        <select className="form--input" value={ vendor } onChange={ getVendor } >
          <option value="DEFAULT"></option>
          <option value="Bitcoin">Bitcoin</option>
          <option value="Blockchain">Blockchain</option>
          <option value="Evil">Evil</option>
          <option value="Ninja">Ninja</option>
        </select> 

        <button onClick={ submitForm } className="button button--form" >Add card</button>
      </form>
  );
}

export default CardForm;