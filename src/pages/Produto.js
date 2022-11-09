import Clients_logos from "../components/Clients_logos";
import Beneficios_cards from "../components/Beneficios_cards";
import Diferenciais_cards from "../components/Diferenciais_cards";

import clevels1 from "../assets/images/clevels/01.png";
import clevels2 from "../assets/images/clevels/02.png";
import clevels3 from "../assets/images/clevels/03.png";

function Produto() {
  return (
    <main className="main--produto">


      <section className="justify-content-center" id="section08">
        <h2 className="h2 fontcolor-primary"><b>Por que somos mais que um CRM?</b></h2>
        <p className="fontcolor-opacity">O Sales Journey é uma Plataforma SaaS, lead-to-cash (oportunidade a fatura), mobile-first, que traz os benefícios da mobilidade, fluxos de trabalho de backoffice e uma camada aberta de APIs, permitindo a integração com qualquer solução, desde um ERP a uma solução de marketing.</p>

        <video></video>

      </section>



      <section className="justify-content-center" id="section09">
        <h4 className="h4 fontcolor-primary">Nossa tecnologia disponibiliza uma experiência inovadora para o seu time de vendas e clientes, oferecendo todas as informações necessárias para uma venda qualificada.</h4>

        <Diferenciais_cards />
        
      </section>



      <section className="justify-content-center bg-secundary" id="section10">
        <h2 className="h2 fontcolor-white">Nossos benefícios</h2>
        
        <Beneficios_cards />

      </section>



      <section className="justify-content-center bg-primary" id="section11">
        <h2 className="h2 fontcolor-secundary">Nossa cultura</h2>
        <p className="fontcolor-white">Não somos apenas mais uma plataforma, mas um time que acredita que ao fazer diferente se chega mais longe. Não fazemos diferente apenas pela novidade, e sim pela mudança positiva que geramos para nossos clientes. <span className="fontcolor-secundary">E o que nos motíva é a crença de que podemos chegar mais longe juntos.</span></p>


        <div class="row cards-beneficios">

          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Comunicação ativa</h5>
                <p class="card-text">A comunicação é o que mantém uma empresa alinhada e produtiva. Agilidade no entendimento e produção são fatores cruciais para nossos clientes.</p>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Transparência</h5>
                <p class="card-text">Saber trabalhar com feedbacks, ser abertos a discusões e novas ideias é uma parte importe do nosso processo.</p>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Cultura ágil</h5>
                <p class="card-text">Agilidade é mossa principal ferramenta para agregar valor ao dia-a-dia dos nossos clientes.</p>
              </div>
            </div>
          </div>

        </div>

        
      </section>



      <section className="justify-content-center" id="section12">
        <h2 className="h2 fontcolor-primary">Empresas que já aceleram suas jornadas</h2>

        <Clients_logos />

      </section>



      <section className="justify-content-center bg-secundary" id="section13">
        <h2 className="h2 fontcolor-white">C-Levels Sales Journey - mudar este texto</h2>

        <div class="row cards-clevels">

          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <img src={clevels1} />
                <h5 class="card-title">Tobias Junior</h5>
                <p class="card-text">(CPTO) - Chief Product and Technology Officer</p>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <img src={clevels2} />
                <h5 class="card-title">Ana Senko</h5>
                <p class="card-text">(COO) - Chief Operating Officer</p>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <img src={clevels3} />
                <h5 class="card-title">Carlos Tofanello</h5>
                <p class="card-text">(CFO) - Chief Financial Officer</p>
              </div>
            </div>
          </div>

        </div>

        
      </section>



    </main>
  );
}

export default Produto;
