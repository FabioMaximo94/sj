import Gratis_form from "../components/Gratis_form";
import Clients_logos from "../components/Clients_logos";

function Gratis() {
  return (
    <main className="main--Gratis">


      <section className="justify-content-center" id="section20">
        <h2 className="h2"><b>Falta pouco ...</b></h2>
        <p className="fontcolor-opacity">Preencha o formulário com suas informações que em poucos minutos você  estará utilizando o Sales Journey. <span className="fontcolor-primary">É grátis!</span></p>

        <Gratis_form />

      </section>


      <section className="justify-content-center" id="section21">
        <h2 className="h2 fontcolor-primary">Empresas que já aceleram suas jornadas</h2>

        <Clients_logos />

      </section>


    </main>
  );
}

export default Gratis;
