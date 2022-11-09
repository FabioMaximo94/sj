import Contato_form from "../components/Contato_form";

function Contato() {
  return (
    <main className="main--contato">


      <section className="justify-content-center page-form" id="section19">
        <h2 className="h2 fontcolor-primary"><b>Fale com nosso time</b></h2>
        <p className="fontcolor-opacity">Entre em contato agora mesmo com nosso time de especialistas e entenda as vantagens e benefícios que o Sales Journey pode trazer ao seu negócio.</p>

        <Contato_form />

      </section>


    </main>
  );
}

export default Contato;
