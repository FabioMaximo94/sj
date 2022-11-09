import Gratis_form from "../components/Gratis_form";
import Clients_logos from "../components/Clients_logos";

function Gratis() {
  return (
    <main className="main--Gratis">
      <div className="content">


      <section className="justify-content-center page-form" id="section20">
        <h2 className="h2 fontcolor-primary"><b>Falta pouco ...</b></h2>
        <p className="fontcolor-opacity">Preencha o formulário com suas informações que em poucos minutos você  estará utilizando o Sales Journey. <span className="fontcolor-primary">É grátis!</span></p>

        <Gratis_form />

      </section>


      <section className="justify-content-center" id="section21">
        <h2 className="h2 fontcolor-primary">Empresas que já aceleram suas jornadas</h2>

        <Clients_logos />

      </section>


      </div>
    </main>
  );
}

export default Gratis;
