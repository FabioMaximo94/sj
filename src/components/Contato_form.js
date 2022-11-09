
function Contato_form() {
  return (
    <div className="contato_form">
      
      <form>

        <label> Nome*
          <input type="text" name="nome" />
        </label>

        <label> Empresa*
          <input type="text" name="empresa" />
        </label>

        <label> Telefone*
          <input type="text" name="telefone" />
        </label>

        <label> E-mail*
          <input type="text" name="email" />
        </label>

        <label> Assunto*
          <select className="form-select" aria-label="Selecione o assunto" name="assunto">
            <option selected>Selecione o assunto</option>
            <option value="Agendar uma apresentação">Agendar uma apresentação</option>
            <option value="Lincenças e Planos">Lincenças e Planos</option>
            <option value="Suporte">Suporte</option>
            <option value="Ouvidoria">Ouvidoria</option>
            <option value="Outros">Outros</option>
          </select>
        </label>

        <label> Mensagem*
          <textarea type="text" name="mensagem" />
        </label>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="receber-conteudo" id="flexCheckDefault" />
          <label className="form-check-label" for="flexCheckDefault">
            Gostaria de receber conteúdos sobre nossa plataforma.
          </label>
        </div>

        <label>
          <input type="submit" value="Enviar" />
        </label>

      </form>

      <p className="inline-form">Ao enviar os dados, eu concordo com a Política de Privacidade.<br />Não utilizaremos suas informações de contato para enviar qualquer tipo de SPAM.</p>

    </div>
  );
}

export default Contato_form;
