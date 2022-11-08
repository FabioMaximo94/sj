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
              <li><a href="#">Produto</a></li>
              <li><a href="#">Planos</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Experimente grátis</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
              <li><a href="#">Termos de uso</a></li>
              <li><a href="#">Políticas de privacidade</a></li>
            </ul>
          </div>

          <div class="col">

            <h4>Visite nossas redes sociais:</h4>
            <ul class="navbar-sociais">
              <li><a href="#"><i class="bi bi-instagram"></i></a></li>
              <li><a href="#"><i class="bi bi-youtube"></i></a></li>
              <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
            </ul>

            <h4>Faça o download na sua loja:</h4>
            <ul class="navbar-lojasapp">
              <li><a href="#" class="btn-app-aplle"><img src={btn_store} alt="Download App Aplle Store" /></a></li>
              <li><a href="#" class="btn-app-google"><img src={btn_google} alt="Download App Google Play" /></a></li>
            </ul>
            
            <h5>@ 2021 Sales Journey - Todos os direitos reservados</h5>

          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
