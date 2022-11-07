import client1 from "../assets/images/client/01.png";
import client2 from "../assets/images/client/02.png";


function Depoiments_slide() {
  return (
    <div className="depoiments_slide">

      <h2 className="h2 fontcolor-primary">O que nossos clientes falam.</h2>

      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">


          <div class="carousel-item active" data-bs-interval="10000">
            <div class="row">
              <div class="col-4">
                <img src={client1} />
              </div>
              <div class="col-8">
                <p>“Através do Sales Journey, nosso consultor integra automaticamente os pedidos de vendas com nosso ERP (SAP), agilizando a jornada de venda e envio do produto aos nossos clientes.”</p>
                <p class="fontcolor-opacity">Thiago Sano, Diretor de Tech & Digital na MedBeauty</p>
              </div>
            </div>
          </div>


          <div class="carousel-item active" data-bs-interval="2000">
            <div class="row">
              <div class="col-4">
                <img src={client2} />
              </div>
              <div class="col-8">
                <p>“Através do Sales Journey, nosso consultor integra automaticamente os pedidos de vendas com nosso ERP (SAP), agilizando a jornada de venda e envio do produto aos nossos clientes.”</p>
                <p class="fontcolor-opacity">Thiago Sano, Diretor de Tech & Digital na MedBeauty</p>
              </div>
            </div>
          </div>


        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

      </div>


    </div>
  );
}

export default Depoiments_slide;
