
function Trabalheconosco_form() {
  return (
    <div className="trabalheconosco_form">
      
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

        <label> Cargo de interesse*
          <select className="form-select" aria-label="Selecione sua área" name="cargo">
            <option selected>Selecione sua área</option>
            <option value="Dev Backend">Dev Backend</option>
            <option value="Dev Frontend">Dev Frontend</option>
            <option value="UX/UI">UX/UI</option>
            <option value="Customer Success">Customer Success</option>
            <option value="Analista SDR">Analista SDR</option>
            <option value="Estágio">Estágio</option>
            <option value="Marketing">Marketing</option>
            <option value="Admnistração">Admnistração</option>
            <option value="RH">RH</option>
            <option value="Outros">Outros</option>
          </select>
        </label>

        <label> Link com suas informações*
          <input type="text" name="link" placeholder="Linkedin, site, etc." />
        </label>

        <label> Enviar currículo*
          <input type="file" name="file" />
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

export default Trabalheconosco_form;
