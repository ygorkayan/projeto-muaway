import React from "react";
import "./CSS/Home.css";
import img from "./img/1header-bg.jpg";
import imgSemFoto from "./img/semfoto.gif";

function criarBanner(...imgs) {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {imgs.map((banne, indice) => {
          return (
            <div className={`carousel-item ${indice === 0 ? "active" : ""}`}>
              <img src={banne} className="d-block w-100" alt="banner" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function criarItemMural(tipo, nome, img) {
  return (
    <div className="ml-2 home-mural-item">
      <p className="home-mural-item-tipo">{tipo}</p>
      <img
        src={img ? img : imgSemFoto}
        className="home-mural-item-img"
        alt="..."
      />
      <p className="home-mural-item-nome">{nome}</p>
    </div>
  );
}

function criadorNoticias(data, tipo, msg, subMensagem) {
  return (
    <div>
      <p>
        [{data}] [{tipo}] {msg}
      </p>
      <p>{subMensagem}</p>
    </div>
  );
}

export default (props) => {
  return (
    <div className="caixaConteudo">
      <div className="home m-1">
        <div className="home-banner">{criarBanner(img)}</div>
        <div className="home-mural">
          {criarItemMural("Tipo", "Nome")}
          {criarItemMural("Tipo", "Nome")}
          {criarItemMural("Tipo", "Nome")}
          {criarItemMural("Tipo", "Nome")}
          {criarItemMural("Tipo", "Nome")}
        </div>

      </div>
    </div>
  );
};
