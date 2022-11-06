//import style
//import "~bootstrap/scss/bootstrap";
import "./App.css";
import "./assets/css/pe-icon-7.css";
//import "./assets/scss/themes.scss";

import Header from "./core/Header";
import Home from "./pages/Home";
import Footer from "./core/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
