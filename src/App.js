//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//import style
import "./assets/css/bootstrap.min.css";
import "./App.css";
//import "./assets/css/pe-icon-7.css";
import "./assets/js/bootstrap.min.js";
//import "./assets/js/bootstrap.bundle.min.js";
import "./assets/fontawesome/css/all.min.css";


import {
  Routes,
  Route
} from "react-router-dom";


import Header from "./core/Header";
import Footer from "./core/Footer";

import Home from "./pages/Home";
import Produto from "./pages/Produto";
import Planos from "./pages/Planos";
import Contato from "./pages/Contato";

import Trabalheconosco from "./pages/Trabalheconosco";
import Gratis from "./pages/Gratis";

import Termos from "./pages/Termos";
import Politica from "./pages/Politica";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route index element={<Home />} />
        <Route path="produto" element={<Produto />} />
        <Route path="planos" element={<Planos />} />
        <Route path="contato" element={<Contato />} />

        <Route path="trabalheconosco" element={<Trabalheconosco />} />
        <Route path="gratis" element={<Gratis />} />

        <Route path="termos" element={<Termos />} />
        <Route path="politica" element={<Politica />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
