import React from "react";
import "./CSS/GoldsWays.css"

export default (props) => {
  return (
    <div className="caixaConteudo">
      <div className="alert alert-secondary" role="alert">
        GoldsWays
      </div>

      <div className="ml-3 mr-3 mb-3 goldsways">
        <h2 className="goldsways-titulo">NOVA LOJA: + MODERNA E FÁCIL</h2>
        <p>
          À partir do dia 03/05/2019 todas as compras de goldsways ou pacotes
          promocionais devem ser realizadas através deu uma loja que segue o
          conceito de e-commerce com carrinhos de compras e diversas formas de
          pagamentos.
        </p>
        <p>
          Link para nova loja:
          <br />
          <span className="goldsways-link">https://novaloja.com</span>
        </p>
        Para mais informações sobre essa mudanças, acesse a notícia a respeito:
        <br />
        <span className="goldsways-link">https://novaloja.com</span>
      </div>
    </div>
  );
};
