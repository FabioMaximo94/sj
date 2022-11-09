import logo from "../assets/images/logo-dark.png";
import '../App.css';

import instagram_icon from "../assets/images/icons/instagram.png";
import youtube_icon from "../assets/images/icons/youtube.png";
import linkedin_icon from "../assets/images/icons/linkedin.png";
import language_icon from "../assets/images/icons/language.png";

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <div className="content">

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

              <a className="navbar-brand" href="./"><img src={logo} className="logo" alt="Sales Journey" /></a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExample07">

                <ul className="navbar-nav mr-auto">

                  <li className="nav-item active">
                    <a className="nav-link" href="produto">Produto</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="planos">Planos</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">Blog</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="contato">Contato</a>
                  </li>


                  <div className="header--sociais__icons">
                    <li className="nav-item">
                      <a className="nav-link" href="#"><img src={instagram_icon} /></a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#"><img src={youtube_icon} /></a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#"><img src={linkedin_icon} /></a>
                    </li>
                  </div>


                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="language" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={language_icon} /></a>
                    <div className="dropdown-menu" aria-labelledby="language">
                      <a className="dropdown-item" href="#">Portugues</a>
                      <a className="dropdown-item" href="#">Ingles</a>
                    </div>
                  </li>

                </ul>

                <a className="btn btn-lg btn-primary" href="gratis" role="button">Comece agora é grátis</a>

                <a className="btn btn-lg btn-secundary" href="#" role="button">Login</a>

              </div>
            </div>
          </nav>

        </div>
      </header>
    </div>
  );
}

export default Header;
