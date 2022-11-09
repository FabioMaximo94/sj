import icon01 from "../assets/images/planos/icon01.png";
import icon02 from "../assets/images/planos/icon02.png";
import icon03 from "../assets/images/planos/icon03.png";

function Planos_cards() {
  return (
    <div className="planos_cards" id="tabelaplanos">

<table className="table">
          <thead>
            <tr>
              <th scope="col"><h4 className="h4">Compare planos e funcionalidades</h4></th>
              <th scope="col"><img className="card-icon" src={icon01} /><h4>Personal</h4><a href="#" className="btn btn-primary">Comece agora é grátis</a></th>
              <th scope="col"><img className="card-icon" src={icon02} /><h4>Startup</h4><a href="#" className="btn btn-primary">Teste grátis</a></th>
              <th scope="col"><img className="card-icon" src={icon03} /><h4>Sales Ops</h4><a href="#" className="btn btn-primary">Teste grátis</a></th>
            </tr>
          </thead>
          <tbody>
            
            <tr className="table-lineblack">
              <th scope="row">Usuários</th>
              <td>1</td>
              <td>Ilimitado</td>
              <td>Ilimitado</td>
            </tr>
            <tr>
              <th scope="row">Equipes</th>
              <td></td>
              <td>10</td>
              <td>Ilimitado</td>
            </tr>
            <tr>
              <th scope="row">Permissões avançadas</th>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Upload de arquivos</th>
              <td>10 MB</td>
              <td>Ilimitado</td>
              <td>Ilimitado</td>
            </tr>
            <tr>
              <th scope="row">API e Webhooks (callbacks)</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Versão desktop e mobile (Apple Store e Google Play)</th>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
            </tr>

            <tr className="table-lineblack">
              <th scope="row">Oportunidades</th>
              <td>Personal</td>
              <td>Startup</td>
              <td>Sales Ops</td>
            </tr>
            <tr>
              <th scope="row">Funil de venda</th>
              <td>1</td>
              <td>10</td>
              <td>Ilimitado</td>
            </tr>
            <tr>
              <th scope="row">Etapas por funil</th>
              <td>5</td>
              <td>Ilimitado</td>
              <td>Ilimitado</td>
            </tr>
            <tr>
              <th scope="row">Tarefas por oportunidade</th>
              <td>10</td>
              <td>Ilimitado</td>
              <td>Ilimitado</td>
            </tr>
            <tr>
              <th scope="row">Campos customizados</th>
              <td></td>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Anexos</th>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Logs de auditoria</th>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Exportação de listas para CSV, Excel ou JSON</th>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
            </tr>

            <tr>
              <th scope="row">Carrinho de venda (produtos e serviços)</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Estoque</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Conversão para pedido de venda</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Campanhas de Giftback</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Políticas comerciais</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Integração via API e webhook (callback)</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>

            <tr className="table-lineblack">
              <th scope="row">Clientes</th>
              <td>Personal</td>
              <td>Startup</td>
              <td>Sales Ops</td>
            </tr>
            <tr>
              <th scope="row">Hierarquia comercial</th>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Logs de auditoria</th>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Exportação de listas para CSV, Excel ou JSON</th>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
            </tr>

            <tr>
              <th scope="row">Bloqueios com Workflow</th>
              <td></td>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Campos customizados</th>
              <td></td>
              <td><i className="fa fa-check"></i></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Integração via API e webhook (callback)</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>

            <tr className="table-lineblack">
              <th scope="row">Pedidos de Vendas</th>
              <td>Personal</td>
              <td>Startup</td>
              <td>Sales Ops</td>
            </tr>
            <tr>
              <th scope="row">Hierarquia comercial</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Logs de auditoria</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Exportação de listas para CSV, Excel ou JSON</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Campos customizados</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Bloqueios com Workflow</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Políticas comerciais</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Estoque</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Campanhas de Giftback</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Integração via API e webhook (callback)</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>

            <tr className="table-lineblack">
              <th scope="row">Suporte</th>
              <td>Personal</td>
              <td>Startup</td>
              <td>Sales Ops</td>
            </tr>
            <tr>
              <th scope="row">Suporte prioritário</th>
              <td></td>
              <td></td>
              <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
              <th scope="row">Customer success (+100 usuários) </th>
              <td></td>
              <td></td>
              <td>Entre em contato</td>
            </tr>

          </tbody>
        </table>

    </div>
  );
}

export default Planos_cards;
