import client1 from "../assets/images/client/01.png";
import client2 from "../assets/images/client/02.png";
import client3 from "../assets/images/client/03.png";
import client4 from "../assets/images/client/04.png";
import client5 from "../assets/images/client/05.png";
import client6 from "../assets/images/client/06.png";


function Clients_logos() {
  return (
    <div className="clients_logos">


      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active" data-bs-interval="10000">
            <div className="row">
              <div className="col-4">
                <img src={client1} />
              </div>
              <div className="col-4">
                <img src={client2} />
              </div>
              <div className="col-4">
                <img src={client3} />
              </div>
            </div>
          </div>

          <div className="carousel-item active" data-bs-interval="2000">
            <div className="row">
              <div className="col-4">
                <img src={client4} />
              </div>
              <div className="col-4">
                <img src={client5} />
              </div>
              <div className="col-4">
                <img src={client6} />
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

export default Clients_logos;
