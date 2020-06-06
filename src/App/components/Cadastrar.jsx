import React from "react";

function criarInput(nome, tipo) {
  return (
    <div class="form-group">
      <label for="exampleInputEmail1">{nome}</label>
      <input
        type={tipo}
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
  );
}

export default (props) => {
  return (
    <div className="caixaConteudo">
      <div className="alert alert-secondary" role="alert">
        Cadastrar
      </div>
      <div className="ml-3 mr-3 mb-3">
        <form>
          {criarInput("Login", "text")}
          {criarInput("Senha", "password")}
          {criarInput("confirme a senha", "password")}
          {criarInput("Nome Completo", "text")}
          {criarInput("Data de nascimento", "date")}
          {criarInput("Endereço de email", "email")}
          {criarInput("Personal ID (PID)", "password")}

          <button type="submit" class="btn btn-success">
            Criar Conta
          </button>
          <button type="submit" class="btn btn-danger ml-3">
            Limpar
          </button>
        </form>
      </div>
    </div>
  );
};
