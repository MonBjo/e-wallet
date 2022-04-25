import './App.css';
import { Routes, Route, Router } from 'react-router-dom';

import Home from './views/Home';
import AddCard from './views/AddCard';
import Error from './views/Error';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  TODO: 
 - Update cardstack when a card is removed.
 - Prevent user from deleting card when no card is active.
\* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function App() {

  addExampleCards();

  function addExampleCards() {
    const savedCards = [
      {
        number: "5948 3201 4865 1422", 
        name: "Anna Andersson",
        endDate: "04/24",
        vendor: "Ninja",
        ccv: 142 
      },
      { 
        number: "7842 0406 4544 6580", 
        name: "Anna Andersson",
        endDate: "10/26",
        vendor: "Blockchain",
        ccv: 830 
      }
    ];
    localStorage.setItem("cardStack", JSON.stringify(savedCards));
    console.log(savedCards);
  }

  return (
    <section className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/addcard" element={ <AddCard/> } />
        <Route path="/*" element={ <Error/> } />
      </Routes>
    </section>
  );
}

export default App;