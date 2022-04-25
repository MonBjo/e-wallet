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
      setCardnumber(event.target.value);
  }

  function getName(event) {
      setName(event.target.value);
  }

  function getEndDate(event) {
      setEndDate(event.target.value);
  }

  function getCcv(event) {
      setCcv(event.target.value);
  }
  
  function getVendor(event) {
      setVendor(event.target.value);
  }


  function submitForm(event) {
    event.preventDefault();

    if(number + name + endDate + ccv + vendor === "") {
      navHome();
    } else if (number.length > 18 && name.length > 4 && 
      endDate.length === 5 && ccv.length === 3 && vendor.length > 0) {
      addNewCard();
      navHome();
    }else {
      alert("please fill out all the fields properly");
    }
  }

  function navHome() {
    navigate('/');
  }

  function addNewCard() {
    let newCardStack = getCardStack();
    newCardStack.push({
      number: number, 
      name: name,
      endDate: endDate,
      vendor: vendor,
      ccv: ccv 
    });
    localStorage.setItem("cardStack", JSON.stringify(newCardStack));
  }

  function getCardStack() {
    const cardStack = JSON.parse(localStorage.cardStack);
    localStorage.clear();
    return cardStack;
  }


  return (
    <form className="form">
        <p className="form--title">Card number</p>
        <input 
          className="form--input" 
          type="text" 
          placehoder="0000 0000 0000 0000" 
          value={ number } 
          onChange={ getCardnumber } 
        />

        <p className="form--title">Cardholder name</p>
        <input 
          className="form--input" 
          type="text" 
          placeholder="John Doe"
          value={ name } 
          onChange={ getName } 
        />

        <section className="form--smallFields">
          <p className="form--title">Valid thru</p>
          <input 
            className="form--input" 
            type="text" 
            placeholder="05/28"
            value={ endDate } 
            onChange={ getEndDate } 
          />

          <p className="form--title">CCV</p>
          <input 
            className="form--input" 
            type="number" 
            placeholder="136"
            value={ ccv } 
            onChange={ getCcv } 
          />
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