import logoFooter from "../assets/images/logo-light.png";
import btn_store from "../assets/images/btn_store.png";
import btn_google from "../assets/images/btn_google.png";

function Footer() {
  return (
    <footer className="footer">

      <div class="container text-center">
        <div class="row">
          <div class="col">
            <a class="navbar-brand" href="#"><img src={logoFooter} className="logo--footer" alt="Sales Journey" /></a>
          </div>
          <div class="col">
            <ul class="list-group list-group-flush">
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
          <div class="col">

            <nav class="navbar navbar-expand-lg bg-light">
              <div class="container-fluid">

                <h4>Visite nossas redes sociais:</h4>

                <div class="footer--sociais__icons">
                  <ul class="navbar-nav">

                      <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-instagram"></i></a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-youtube"></i></a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-linkedin"></i></a>
                      </li>

                  </ul>
                </div>

                <h4>Faça o download na sua loja:</h4>

                <div class="footer--lojasapp">
                  <ul class="navbar-nav">

                      <li class="nav-item">
                        <a class="nav-link app--aplle__btn" href="#">
                          <img src={btn_store} alt="Download App Aplle Store" />
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link app--google__btn" href="#">
                          <img src={btn_google} alt="Download App Google Play" />
                        </a>
                      </li>

                  </ul>
                </div>

                <h5>@ 2021 Sales Journey - Todos os direitos reservados</h5>

              </div>
            </nav>

          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
