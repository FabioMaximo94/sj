import Trabalheconosco_form from "../components/Trabalheconosco_form";

function Trabalheconosco() {
  return (
    <main className="main--Trabalheconosco">


      <section className="justify-content-center" id="section22">
        <h2 className="h2"><b>Falta pouco ...</b></h2>
        <p className="fontcolor-opacity">Preencha o formulário com suas informações que em poucos minutos você  estará utilizando o Sales Journey. <span className="fontcolor-primary">É grátis!</span></p>

        <Trabalheconosco_form />

      </section>


      <section className="justify-content-center" id="section23">
        <h2 className="h2 fontcolor-primary">Empresas que já aceleram suas jornadas</h2>

        <Clients_logos />

      </section>


    </main>
  );
}

export default Trabalheconosco;
