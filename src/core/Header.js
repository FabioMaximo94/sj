import logo from "../assets/images/logo-dark.png";
import '../App.css';

function Header() {
  return (
    <div className="Header">
      <header className="App-header">






    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">

        <a class="navbar-brand" href="#"><img src={logo} className="logo" alt="Sales Journey" /></a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample07">

          <ul class="navbar-nav mr-auto">

            <li class="nav-item active">
              <a class="nav-link" href="#">Produto</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Planos</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Contato</a>
            </li>


            <div class="header--sociais__icons">
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-instagram"></i></a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-youtube"></i></a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#"><i class="bi bi-linkedin"></i></a>
              </li>
            </div>


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="language" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="bi bi-globe2"></i></a>
              <div class="dropdown-menu" aria-labelledby="language">
                <a class="dropdown-item" href="#">Portugues</a>
                <a class="dropdown-item" href="#">Ingles</a>
              </div>
            </li>

          </ul>

          <a class="btn btn-lg btn-primary" href="#" role="button">Comece agora é grátis</a>

          <a class="btn btn-lg btn-secondary" href="#" role="button">Login</a>

        </div>
      </div>
    </nav>







        
      </header>
    </div>
  );
}

export default Header;
