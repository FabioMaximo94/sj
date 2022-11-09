import client1 from "../assets/images/client/01.png";
import client2 from "../assets/images/client/02.png";


function Depoiments_slide() {
  return (
    <div className="depoiments_slide">

      <h2 className="h2 fontcolor-primary">O que nossos clientes falam.</h2>

      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">


          <div className="carousel-item active" data-bs-interval="10000">
            <div className="row">
              <div className="col-4">
                <img src={client1} />
              </div>
              <div className="col-8">
                <p>“Através do Sales Journey, nosso consultor integra automaticamente os pedidos de vendas com nosso ERP (SAP), agilizando a jornada de venda e envio do produto aos nossos clientes.”</p>
                <p className="fontcolor-opacity">Thiago Sano, Diretor de Tech & Digital na MedBeauty</p>
              </div>
            </div>
          </div>


          <div className="carousel-item active" data-bs-interval="2000">
            <div className="row">
              <div className="col-4">
                <img src={client2} />
              </div>
              <div className="col-8">
                <p>“Através do Sales Journey, nosso consultor integra automaticamente os pedidos de vendas com nosso ERP (SAP), agilizando a jornada de venda e envio do produto aos nossos clientes.”</p>
                <p className="fontcolor-opacity">Thiago Sano, Diretor de Tech & Digital na MedBeauty</p>
              </div>
            </div>
          </div>


        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


    </div>
  );
}

export default Depoiments_slide;
