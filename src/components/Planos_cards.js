import icon01 from "../assets/images/planos/icon01.png";
import icon02 from "../assets/images/planos/icon02.png";
import icon03 from "../assets/images/planos/icon03.png";

function Planos_cards() {
  return (
    <div className="planos_cards">

      <h2 className="h2 fontcolor-white">Conheça nossos planos</h2>

      <div class="planos-btns justify-content-center">
        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" />
        <label class="btn btn-secondary" for="option1">Plano mensal</label>

        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" checked />
        <label class="btn btn-secondary" for="option2">Plano anual</label>
      </div>

      <p>Economize 13% no plano anual</p>


      <div class="row cards-planos">


        <div class="col-sm-4">
          <div class="card">

            <div class="card-header">
              <img class="card-icon" src={icon01} />
              <h4>Personal</h4>
            </div>

            <div class="card-body">

              <h5 class="card-title">Para organizar seu clientes e gerenciar o seu funil de vendas.</h5>
              <span class="line-primary"></span>
              <h1 class="card-price">Free</h1>
              <p class="card-text-inline-primary">Individual</p>

              <a class="btn btn-lg btn-primary" href="#" role="button">Comece agora é grátis</a>
              <p class="card-text-afterbtn">Não é necessário cartão de crédito</p>
              <span class="line-primary"></span>

              <ul>

                <li>• Gestão de clientes, funil de venda, oportunidades (leads) e tarefas.</li>

                <li>• Anexe arquivos aos clientes e oportunidades</li>

                <li>• Segregação de dados para hierarquia comercial</li>

                <li>• Organize os usuários em equipes</li>

                <li>• Logs de auditoria</li>

              </ul>

              <a href="#" class="btn btn-primary-white">Ver todos os recursos</a>

            </div>
          </div>
        </div>



        <div class="col-sm-4">
          <div class="card">

            <div class="card-header">
              <img class="card-icon" src={icon02} />
              <h4>Startup</h4>
            </div>

            <div class="card-body">

              <h5 class="card-title">Para usuários que querem fazer um pouco mais e escalar suas vendas.</h5>
              <span class="line-primary"></span>
              <h1 class="card-price">R$ 89,00</h1>
              <p class="card-text-inline-secundary">por usuário por mês, faturado mensalmente</p>

              <a class="btn btn-lg btn-primary" href="#" role="button">Teste grátis</a>
              <p class="card-text-afterbtn">Teste gratuito de 14 dias. Não é necessário cartão de crédito</p>
              <span class="line-primary"></span>

              <ul>

                <li>• Automações de tarefas e preenchimento de informações</li>

                <li>• Campos customizados</li>

                <li>• Anexe arquivos aos clientes e oportunidades</li>

                <li>• Bloqueios de cadastros com regras avançadas de Workflow</li>

                <li>• Envie propostas/orçamentos com layouts personalizados</li>

                <li>• Funis e etapas sem limitações</li>

                <li>• Envie e receba e-mails por dentro do Sales Journey integrados a sua conta Office 365 ou Google Mail (em breve)</li>

                <li>• Entre com contato com seus clientes via Sales Journey e tenha a gravação e transcrição das chamadas (em breve)
                *Necessita contratação adicional</li>

              </ul>

              <a href="#" class="btn btn-primary-white">Ver todos os recursos</a>

            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card">

            <div class="card-header">
              <img class="card-icon" src={icon03} />
              <h4>Sales Ops</h4>
            </div>

            <div class="card-body">

              <h5 class="card-title">Gerencie toda jornada de vendas da sua empresa em um único lugar.</h5>
              <span class="line-primary"></span>
              <h1 class="card-price">R$ 180,00</h1>
              <p class="card-text-inline-primary">por usuário por mês, faturado mensalmente</p>

              <a class="btn btn-lg btn-primary" href="#" role="button">Teste grátis</a>
              <p class="card-text-afterbtn">Teste gratuito de 30 dias. Não é necessário cartão de crédito</p>
              <span class="line-primary"></span>

              <ul>
                <li>• Para organizar seu Crie carrinho de vendas desde a oportunidade</li>

                <li>• Cadastre seus produtos e serviços</li>

                <li>• Gerencie e valide vendas com base em estoque</li>

                <li>• Desenha regras avançadas de preço baseadas em condições dinâmicas</li>

                <li>• Implementes campanhas de Giftback</li>

                <li>• Criação automática de pedido de venda a partir da oportunidade</li>

                <li>• Implemente políticas comerciais no pedido de venda</li>

                <li>• Sem limites de uso de recursos</li>

                <li>• Utilize nossas APIs e Webhooks (callbacks) para integrar com os mais diversos produtos de automação de marketing, produtividade e ERPs.clientes e gerenciar o seu funil de vendas.</li>
              </ul>

              <a href="#" class="btn btn-primary-white">Ver todos os recursos</a>

            </div>
          </div>
        </div>




      </div>

    </div>
  );
}

export default Planos_cards;
