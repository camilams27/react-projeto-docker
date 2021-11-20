import Personagens from "./pages/Personagens/Personagens";
import Home from "./pages/Home/Home";

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './App.css';

function App() {
  return(
    < Router > 
      < Routes > 
        < Route path = "/" element = { < Home /> } />
        < Route path = "/personagens" element = { < Personagens /> } />  
      </ Routes > 
      <nav>
        <Link to="/" exact> 
          Home
        </Link>
        <Link to="/personagens" >
          Personagens
        </Link>
      </nav>
    </ Router > );
}

export default App;
