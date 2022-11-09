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
        <div class="content">

          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">

              <a class="navbar-brand" href="./"><img src={logo} className="logo" alt="Sales Journey" /></a>

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarsExample07">

                <ul class="navbar-nav mr-auto">

                  <li class="nav-item active">
                    <a class="nav-link" href="produto">Produto</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="planos">Planos</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="contato">Contato</a>
                  </li>


                  <div class="header--sociais__icons">
                    <li class="nav-item">
                      <a class="nav-link" href="#"><img src={instagram_icon} /></a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="#"><img src={youtube_icon} /></a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="#"><img src={linkedin_icon} /></a>
                    </li>
                  </div>


                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="language" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={language_icon} /></a>
                    <div class="dropdown-menu" aria-labelledby="language">
                      <a class="dropdown-item" href="#">Portugues</a>
                      <a class="dropdown-item" href="#">Ingles</a>
                    </div>
                  </li>

                </ul>

                <a class="btn btn-lg btn-primary" href="#" role="button">Comece agora é grátis</a>

                <a class="btn btn-lg btn-secundary" href="#" role="button">Login</a>

              </div>
            </div>
          </nav>

        </div>
      </header>
    </div>
  );
}

export default Header;
