
function Clients_logos() {
  return (
    <div className="clients_logos">


      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-item active" data-bs-interval="10000">
            <div class="row">
              <div class="col-4">
                <img src="..."></img>
              </div>
              <div class="col-4">
                <img src="..."></img>
              </div>
              <div class="col-4">
                <img src="..."></img>
              </div>
            </div>
          </div>

          <div class="carousel-item active" data-bs-interval="2000">
            <div class="row">
              <div class="col-4">
                <img src="..."></img>
              </div>
              <div class="col-4">
                <img src="..."></img>
              </div>
              <div class="col-4">
                <img src="..."></img>
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

export default Clients_logos;
