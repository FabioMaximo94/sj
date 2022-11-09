import Depoiments_slide from "../components/Depoiments_slide";
import Planos_table from "../components/Planos_table";

import Planos_cards from "../components/Planos_cards";
import Agendar_form from "../components/Agendar_form";

import planos_img from "../assets/images/planos.png";

function Planos() {
  return (
    <main className="main--Planos">


      <section className="justify-content-center" id="section14">
        <h2 className="h2"><b>Seus objetivos, nossa jornada de sucesso!</b></h2>
        <p className="fontcolor-opacity">Somos a melhor ferramenta estratégica para sua equipe de vendas alcançar os objetivos.</p>

        <img src={planos_img} />

      </section>



      <section className="justify-content-center bg-primary" id="section15">

        <Planos_cards />
        
      </section>



      <section className="justify-content-center bg-primary" id="section16">

        <Planos_table />

      </section>



      <section className="justify-content-center" id="section17">

        <Depoiments_slide />
        
      </section>



      <section className="justify-content-center" id="section18">

        <h2 className="h2">Ficou com alguma dúvida para decidir qual é a melhor solução para seu time de vendas?</h2>

        <Agendar_form />
        
      </section>


    </main>
  );
}

export default Planos;
