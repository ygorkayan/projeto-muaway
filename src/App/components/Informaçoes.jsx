import React from "react";

const criarItem = (item, info) => {
  return (
    <tr>
      <td>{item}</td>
      <td>{info}</td>
    </tr>
  );
};

export default (props) => {
  return (
    <div className="caixaConteudo">
      <div className="alert alert-secondary" role="alert">
        Informaçoes
      </div>
      <div className="ml-3 mr-3 mb-3">
        <table class="table table-striped">
          <tbody>
            {criarItem("Nome do server / horário:", "MuAwaY / 24 horas.")}
            {criarItem("Versão do server:", "97d+99i + Novos itens.")}
            {criarItem("Expêrincia:", "10.000x.")}
            {criarItem("Drops:", "80%.")}
            {criarItem("Bug bless:", "	Online.")}
            {criarItem("Spots:", "	Todos os Mapas.")}

            {criarItem(
              "Itens à Venda nos Npc´s:",
              "	Itens +9, Jewel of bless, soul, life, box of kundun +1 e +2."
            )}
            {criarItem("Blood castle:", "Funcionando.")}
            {criarItem("Devil square:", "Funcionando.")}

            {criarItem(
              "Remover PK (player killer):",
              "Npc de PK, liberado pra Free´s, e Vip´s."
            )}
            {criarItem(
              "Level do reset free, vip, gold vip:",
              "	Free: 600 || Vip: 450 || Gold Vip: 350."
            )}

            {criarItem("Jewel of bless::", "100%")}
            {criarItem("Jewel of soul:", "100%")}
            {criarItem("Jewel of life:", "100%")}
            {criarItem("Itens +10:", "100%")}
            {criarItem("Itens +11:", "100%")}
          </tbody>
        </table>
      </div>
    </div>
  );
};
