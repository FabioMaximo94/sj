
function Gratis_form() {
  return (
    <div className="gratis_form">
      
      <form>

        <label> Nome*
          <input type="text" name="nome" />
        </label>

        <label> Telefone*
          <input type="text" name="telefone" />
        </label>

        <label> E-mail*
          <input type="text" name="email" />
        </label>

        <label> Cargo*
          <select className="form-select" aria-label="Selecione o cargo" name="cargo">
            <option selected>Selecione o cargo</option>
            <option value="Administrador">Administrador</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Gerente de vendas">Gerente de vendas</option>
            <option value="Marketing">Marketing</option>
            <option value="Representante de vendas">Representante de vendas</option>
            <option value="VP/CEO">VP/CEO</option>
            <option value="Outros">Outros</option>
          </select>
        </label>

        <label> Empresa*
          <input type="text" name="empresa" />
        </label>

        <label> Segmento*
          <select className="form-select" aria-label="Selecione o segmento" name="segmento">
            <option selected>Selecione o segmento</option>
            <option value="Automotivo">Automotivo</option>
            <option value="Educação">Educação</option>
            <option value="Farmacêutica e Biotecnologia">Farmacêutica e Biotecnologia</option>
            <option value="Manufatura">Manufatura</option>
            <option value="Meios de comunicação">Meios de comunicação</option>
            <option value="ONG">ONG</option>
            <option value="Saúde">Saúde</option>
            <option value="Serviços financeiros">Serviços financeiros</option>
            <option value="Setor público">Setor público</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Telecomunicação">Telecomunicação</option>
            <option value="Varejo e bens de consumo">Varejo e bens de consumo</option>
            <option value="Outros">Outros</option>
          </select>
        </label>

        <label> Tamanho da empresa*
          <select className="form-select" aria-label="Número de funcionários" name="tamanho_empresa">
            <option selected>Número de funcionários</option>
            <option value="1 - 50 funcionários">1 - 50 funcionários</option>
            <option value="50 - 300 funcionários">50 - 300 funcionários</option>
            <option value="300 - 1.000 funcionários">300 - 1.000 funcionários</option>
            <option value="1.000 - 2.000 funcionários">1.000 - 2.000 funcionários</option>
            <option value="+ 2.000 funcionários">+ 2.000 funcionários</option>
          </select>
        </label>

        <label> Plano*
          <select className="form-select" aria-label="Selecione o plano" name="plano">
            <option selected>Selecione o plano</option>
            <option value="Personal">Personal</option>
            <option value="Startup">Startup</option>
            <option value="Sales Ops">Sales Ops</option>
          </select>
        </label>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="receber-conteudo" id="flexCheckDefault" />
          <label className="form-check-label" for="flexCheckDefault">
            Gostaria de receber conteúdos sobre nossa plataforma.
          </label>
        </div>

        <label>
          <input type="submit" value="Comece agora" />
        </label>

      </form>

      <p className="inline-form">Ao enviar os dados, eu concordo com a Política de Privacidade.<br />Não utilizaremos suas informações de contato para enviar qualquer tipo de SPAM.</p>

    </div>
  );
}

export default Gratis_form;
