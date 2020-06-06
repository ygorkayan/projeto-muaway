import React from "react";
import "./CSS/Revenda.css"

function criarTabela(titulo, msg) {
  return (
    <table class="table downloads-table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">{titulo}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{msg}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default (props) => {
  return (
    <div className="caixaConteudo">
      <div className="alert alert-secondary" role="alert">
        Revenda
      </div>
      <div className="ml-3 mr-3 revenda">
        {criarTabela(
          "O que é um Revendedor?",
          `Revendedor é um comerciante ou um jogador que distribui 
          GoldsWay´s em sua cidade ou entre seus amigos.Para se tornar 
          um Revendedor você deve possuir uma Lan House para obter lucros 
          maiores ou ter um grupo de amigos extenso.Você jogador que indicar 
          um Revendedor e ele fechar algum pacote conosco você terá premiação, 
          portanto indique para o Dono de sua Lan House e diga seu Login para 
          ele que assim que ter o contrato fechado você jogador ganhará seus beneficios.`
        )}

        {criarTabela(
          "Como se tornar um Revendedor?",
          `Envie um ticket com o assunto "Revendedor" e assim terá todos os detalhes e valores de nossos pacotes.`
        )}

        {criarTabela(
          "Quais o valores dos pacotes de Revendedor?",
          `Os valores de pacotes são personalizados, não teremos um valor fixo pois sempre estamos com promoções, 
          e em épocas de promoções os preços são reajustados para os nossos revendedores.`
        )}

        {criarTabela(
          "Quais as facilidades?",
          `Após a sua confirmação de pagamento que será confirmada em no máximo 48 horas você já terá a opção 
          habilitada em sua conta, portanto terá um painel exclusivo com todo o suporte necessário para atender 
          seus clientes.`
        )}
      </div>
    </div>
  );
};
