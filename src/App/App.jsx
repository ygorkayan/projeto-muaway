import React from "react";
import "./App.css";

import Header from "./components/Header";
import MenuEsquerdo from "./components/MenuEsquerdo";

import Conteudo from "./Conteudo";

export default (props) => {
  return (
    <div className="pagina">
      <Header />
      <MenuEsquerdo />
      <Conteudo />
    </div>
  );
};
