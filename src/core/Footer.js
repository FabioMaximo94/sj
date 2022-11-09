import logoFooter from "../assets/images/logo-light.png";
import btn_store from "../assets/images/btn_store.png";
import btn_google from "../assets/images/btn_google.png";

import instagram_icon from "../assets/images/icons/instagram.png";
import youtube_icon from "../assets/images/icons/youtube.png";
import linkedin_icon from "../assets/images/icons/linkedin.png";

function Footer() {
  return (
    <footer className="footer">
    <div className="content">

      <div className="container text-center">
        <div className="row">

          <div className="col">
            <a className="navbar-brand" href="#"><img src={logoFooter} className="logo--footer" alt="Sales Journey" /></a>
          </div>

          <div className="col">
            <ul className="list-group list-group-flush">
              <li><a href="produto">Produto</a></li>
              <li><a href="planos">Planos</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="contato">Contato</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="gratis">Experimente grátis</a></li>
              <li><a href="trabalheconosco">Trabalhe conosco</a></li>
              <li><a href="termos">Termos de uso</a></li>
              <li><a href="politica">Políticas de privacidade</a></li>
            </ul>
          </div>

          <div className="col">

            <h4>Visite nossas redes sociais:</h4>
            <ul className="navbar-sociais">
              <li><a href="#"><img src={instagram_icon} /></a></li>
              <li><a href="#"><img src={youtube_icon} /></a></li>
              <li><a href="#"><img src={linkedin_icon} /></a></li>
            </ul>

            <h4>Faça o download na sua loja:</h4>
            <ul className="navbar-lojasapp">
              <li><a href="#" className="btn-app-aplle"><img src={btn_store} alt="Download App Aplle Store" /></a></li>
              <li><a href="#" className="btn-app-google"><img src={btn_google} alt="Download App Google Play" /></a></li>
            </ul>
            
            <h5>@ 2021 Sales Journey - Todos os direitos reservados</h5>

          </div>

        </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
