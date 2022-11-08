//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//import style
//import "~bootstrap/scss/bootstrap";
import "./App.css";
import "./assets/css/pe-icon-7.css";
//import "./assets/scss/themes.scss";

import Header from "./core/Header";
import Footer from "./core/Footer";

import Home from "./pages/Home";
import Produto from "./pages/Produto";
import Planos from "./pages/Planos";
import Contato from "./pages/Contato";
import Termos from "./pages/Termos";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
