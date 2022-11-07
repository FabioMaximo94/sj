
function Agendar_form() {
  return (
    <div className="agendar_form">

      <p>Comece agora mesmo uma verdadeira jornada de sucesso!</p>

      <form>
        <label>
          <input type="text" name="name" placeholder="Digite seu e-mail" />
          <input type="submit" value="Agende uma demonstração" />
        </label>
        <p>Não é necessário cadastrar cartão de crédito.</p>
      </form>

    </div>
  );
}

export default Agendar_form;
