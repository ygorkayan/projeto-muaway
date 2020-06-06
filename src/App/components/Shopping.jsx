import React from "react";
import "./CSS/Shopping.css";

import imgShoppingGolds from "./img/shoppingGolds.jpg";
import imgShoppingGoldsAway from "./img/shoppingGoldsAway.jpg";

export default (props) => {
  return (
    <div className="caixaConteudo">
      <div className="alert alert-secondary" role="alert">
        Shopping
      </div>
      <div className="shopping">
        <div className="ml-3 mr-3 mb-3">
          <div className="shopping-caixa mr-1">
            <h3 className="shoppin-titulo">Acessar Shopping Goldsway´s</h3>
            <div className="shopping-info">
              <p>
                No shopping de Goldsway´s, você pode comprar itens com, 6
                options (full), de +0 à +15 e com opcional de +0 à +28.
              </p>
              <span className="mt-3">Veja o exemplo na imagem abaixo:</span>
            </div>
            <img
              src={imgShoppingGoldsAway}
              alt="logo"
              className="img-fluid mt-2"
            />
          </div>

          <div className="shopping-caixa">
            <h3 className="shoppin-titulo">Acessar Shopping Golds</h3>
            <div className="shopping-info">
              <p>
                No shopping de Golds, você pode comprar itens com, 2 options, de
                +0 à +11 e com opcional de +0 à +16.
              </p>
              <span className="mt-3">Veja o exemplo na imagem abaixo:</span>
            </div>
            <img src={imgShoppingGolds} alt="logo" className="img-fluid mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
