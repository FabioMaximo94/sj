import Agendar_form from "../components/Agendar_form";
import Clients_logos from "../components/Clients_logos";
import Beneficios_cards from "../components/Beneficios_cards";
import Diferenciais_cards from "../components/Diferenciais_cards";
import Planos_cards from "../components/Planos_cards";
import Depoiments_slide from "../components/Depoiments_slide";

import plataforma_img from "../assets/images/plataforma_img.png";
import arquitetura_img from "../assets/images/arquitetura_img.png";

function Home() {
  return (
    <main className="main--home">


      <section className="justify-content-center" id="section01">
        <h2 className="h2"><b>Mais que um CRM.</b><br/>Um novo mundo de controle e eficiência.</h2>
        <p className="fontcolor-opacity">Vá além da agilidade e organização com sua equipe de vendas.</p>

        <p>Comece agora mesmo uma verdadeira jornada de sucesso!</p>

        <Agendar_form />

        <img src={plataforma_img} />

      </section>



      <section className="justify-content-center bg-secundary" id="section02">
        <h2 className="h2 fontcolor-white">Jornada de vendas eficaz é aquela em que todos ficam satisfeitos: o seu cliente pela solução. Você, pela rentabilidade.</h2>
        
        <Beneficios_cards />

      </section>
      

      <section className="justify-content-center" id="section03">
        <h2 className="h2 fontcolor-primary">Empresas que já aceleram suas jornadas</h2>

        <Clients_logos />

      </section>



      <section className="justify-content-center bg-primary" id="section04">
        <h2 className="h2 fontcolor-white">Sabe por que somos mais que um CRM? Veja nossos diferenciais.</h2>

        <Diferenciais_cards />
        
      </section>



      <section className="justify-content-center" id="section05">
        <h2 className="h2 fontcolor-primary">Arquitetura de integração.</h2>
        <p className="fontcolor-opacity">Com uma robusta camada de APIs, o Sales Journey pode ser integrado facilmente.</p>

        <img src={arquitetura_img} />
        
      </section>



      <section className="justify-content-center bg-primary" id="section06">

        <Planos_cards />
        
      </section>



      <section className="justify-content-center" id="section07">

        <Depoiments_slide />
        
      </section>



    </main>
  );
}

export default Home;
