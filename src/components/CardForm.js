import './CardForm.css';
import { useNavigate } from 'react-router-dom';

function CardForm() {
  const navigate = useNavigate();

  function submitForm(event) {
    event.preventDefault();
    //navHome();
    // TODO: Spara korten i en array som sedan skickas till localStorage
    let card = {
      cardNumber: event.id.number,
      cardholderName: event.name,
      validThru: event.endDate,
      CCV: event.CCV, 
      vendor: event.vendor
    }
    console.log("card: ", card);
  }

  function navHome() {
    navigate('/');
  }

  return (
    <form className="form">
        <p className="form--title">Card number</p>
        <input className="form--input" type="number" id="number" />

        <p className="form--title">Cardholder name</p>
        <input className="form--input" type="text" placeholder='John Doe' id="name" />

        <section className="form--smallFields">
          <p className="form--title">Valid thru</p>
          <input className="form--input" type="text" id="endDate" />

          <p className="form--title">CCV</p>
          <input className="form--input" type="number" id="CCV" />
        </section>

        <p className="form--title">Vendor</p>
        <select className="form--input" id="vendor">
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