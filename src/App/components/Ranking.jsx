import React from "react";
import "./CSS/Ranking.css";

function seletorQuantidade() {
  return (
    <select>
      <option value="5">Top 5</option>
      <option value="10" selected="selected">
        Top 10
      </option>
      <option value="15">Top 15</option>
      <option value="20">Top 20</option>
      <option value="25">Top 25</option>
      <option value="30">Top 30</option>
      <option value="50">Top 50</option>
      <option value="100">Top 100</option>
    </select>
  );
}

function seletorClase() {
  return (
    <select>
      <option value="all">Todas</option>
      <option value="0">DW´s</option>
      <option value="1">SM´s</option>
      <option value="16">DK´s</option>
      <option value="17">BK´s</option>
      <option value="32">ELF´s</option>
      <option value="33">ME´s</option>
      <option value="48">MG´s</option>
    </select>
  );
}

function seletorTipoRanking() {
  return (
    <select>
      <option selected="selected" value="novalue">
        Selecione:
      </option>
      <optgroup label="Reset´s">
        <option value="1">Reset´s semanal</option>
        <option value="2">Reset´s total</option>
        <option value="3">Reset´s troféus</option>
      </optgroup>
      <optgroup label="MR´s">
        <option value="4">MR´s semanal</option>
        <option value="5">MR´s total</option>
        <option value="6">MR´s troféus</option>
      </optgroup>
      <optgroup label="PK´s">
        <option value="7">PK´s semanal</option>
        <option value="8">PK´s total</option>
        <option value="9">PK´s troféus</option>
      </optgroup>
      <optgroup label="Hero´s">
        <option value="10">Hero´s semanal</option>
        <option value="11">Hero´s total</option>
        <option value="12">Hero´s troféus</option>
      </optgroup>
      <optgroup label="Guild´s">
        <option value="13">Guild´s semanal</option>
        <option value="14">Guild´s total</option>
        <option value="15">Guild´s troféus</option>
      </optgroup>
      <optgroup label="Outros">
        <option value="16">Trófeus geral</option>
      </optgroup>
      <optgroup label="Eventos">
        <option value="19">Mata-Mata</option>
        <option value="20">Esconde-Esconde</option>
        <option value="21">Pega-Pega</option>
        <option value="22">O Corajoso</option>
        <option value="23">Pega o GM</option>
        <option value="24">Caça ao tesouro</option>
        <option value="25">Quiz</option>
        <option value="26">Maratonas de Guild</option>
        <option value="27">Maratonas de Jogadores</option>
      </optgroup>
    </select>
  );
}

export default (props) => {
  return (
    <div className="caixaConteudo">
      <div className="alert alert-secondary" role="alert">
        Ranking
      </div>

      <div className="ml-3 ranking">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Quantidade</th>
              <th scope="col">Classe</th>
              <th scope="col">Tipo do Ranking</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{seletorQuantidade()}</td>
              <td>{seletorClase()}</td>
              <td>{seletorTipoRanking()}</td>
              <td>
                <button className="btn btn-secondary btn-sm">Buscar</button>
              </td>
            </tr>
            <tr>
              <td colSpan="4">
                Atenção: O filtro de classe não se aplica em Rankings de Guilds,
                Troféus e Eventos.
              </td>
            </tr>
          </tbody>
        </table>

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Perfil</th>
              <th scope="col">Tipo</th>
              <th scope="col">Nome</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select>
                  <option value="all">Personagem</option>
                  <option value="0">Guild</option>
                </select>
              </td>
              <td>
                <select>
                  <option value="all">Igual á</option>
                  <option value="0">Termina com</option>
                  <option value="0">Contém</option>
                </select>
              </td>
              <td>
                <input type="text" className="ranking-input-nome" />
              </td>
              <td>
                <button className="btn btn-secondary btn-sm">Buscar</button>
              </td>
            </tr>
            <tr>
              <td colSpan="4">
                <span className="ranking-color-red">Observações:</span>
                <br />
                * : O filtro de classe não servem para os Top´s Guilds, e Top´s
                Troféus. <br />
                * : Os Ranking´s Totais são atualizadosautomaticamente de 15 em
                15 minutos.. <br />
                * : Os Ranking´s Semanais são atualizados automaticamente de 15
                em 15 minutos.. <br />
                * : Os Ranking´s de Trófeus são em tempo real. <br />
                * : Nosso sistema é case sensitive, ou seja, letras maiúsculas
                são diferentes de letras <br />
                inúsculas.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
