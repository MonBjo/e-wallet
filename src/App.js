import './App.css';
import { Routes, Route, Router } from 'react-router-dom';

import Home from './views/Home';
import AddCard from './views/AddCard';
import Error from './views/Error';

function App() {
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