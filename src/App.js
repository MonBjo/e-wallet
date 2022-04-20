import './App.css';
import { Routes, Route, Router } from 'react-router-dom';

import Home from './views/Home';
import AddCard from './views/AddCard';
import Error from './views/Error';
import Top from './components/Top';

function App() {
  return (
    <section className="App">
      <Top />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/addcard" element={ <AddCard/> } />
        <Route path="/*" element={ <Error/> } />
      </Routes>
    </section>
  );
}

export default App;