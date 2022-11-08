import imgcard1 from "../assets/images/diferenciais/01.png";
import imgcard2 from "../assets/images/diferenciais/02.png";
import imgcard3 from "../assets/images/diferenciais/03.png";
import imgcard4 from "../assets/images/diferenciais/04.png";
import imgcard5 from "../assets/images/diferenciais/05.png";
import imgcard6 from "../assets/images/diferenciais/06.png";
import imgcard7 from "../assets/images/diferenciais/07.png";

function Diferenciais_cards() {
  return (
    <div className="diferenciais_cards">


      <div class="row cards-diferenciais">


      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <img class="card-img" src={imgcard1} />
            <h5 class="card-title">Indicadores de performance</h5>
            <p class="card-text">Indicadores que apresentam visões analíticas e sintéticas, para uma rápida tomada de decisão.</p>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <img class="card-img" src={imgcard2} />
            <h5 class="card-title">Gestão de oportunidades (CRM)</h5>
            <p class="card-text">Gerencie todas as etapas do funil com recursos como tarefas, comunicação customizada e a possibilidade de criação de pedidos de vendas.</p>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <img class="card-img" src={imgcard3} />
            <h5 class="card-title">Pedidos de vendas</h5>
            <p class="card-text">Uma ferramenta para simulação e criação de pedidos de vendas, integrado com as funcionalidades de precificação, estoque e limites de crédito.</p>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <img class="card-img" src={imgcard4} />
            <h5 class="card-title">Estoque</h5>
            <p class="card-text">Gestão interna que mostra em tempo real todas as informações necessárias para o processo transacional, tanto no app quanto no desktop.</p>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <img class="card-img" src={imgcard5} />
            <h5 class="card-title">Pricing dinâmica</h5>
            <p class="card-text">Composição de preço por camadas (condições) permitindo o uso de regras avançadas e variáveis.</p>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <img class="card-img" src={imgcard6} />
            <h5 class="card-title">Margem de contribuição</h5>
            <p class="card-text">Considerando as camadas de precificação, calcula os resultados reais da venda.</p>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <img class="card-img" src={imgcard7} />
            <h5 class="card-title">Limites de crédito</h5>
            <p class="card-text">Acompanhamento do contas a receber dos clientes, permitindo configurar regras de precificação e vendas. (em breve)</p>
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="justify-content-center">

        <h4>Ficou com alguma dúvida?</h4>
        <a class="btn btn-secundary" href="#">Agende uma demonstração</a>

        <h4>ou começe agora uma jornada de vendas de sucesso!</h4>
        <a class="btn btn-primary" href="#">Comece agora é grátis</a>

        </div>
      </div>



      </div>


    </div>
  );
}

export default Diferenciais_cards;
