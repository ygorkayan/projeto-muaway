import React from "react";
import "./CSS/MenuEsquerdo.css";
import { connect } from "react-redux";
import PainelLogin from "./PainelLogin";
import bannerShop from "./img/bannerShopping.gif";

const criarBotton = (props, nome, rota) => {
  return (
    <button
      type="button"
      className="btn btn-secondary btn-menu-vertical"
      onClick={() => props.novaRota(rota)}
    >
      {nome}
    </button>
  );
};

const MenuEsquerdo = (props) => {
  return (
    <div className="menu-squerdo">
      <div className="menu menu-squerdo-padrao">
        <div className="btn-group-vertical">
          {criarBotton(props, "Ajuda", "Ajuda")}
          {criarBotton(props, "GoldsWays", "GoldsWays")}
          {criarBotton(props, "Informaçoes", "Informaçoes")}
          {criarBotton(props, "Facebook", "Facebook")}
          {criarBotton(props, "Twitter", "Twitter")}
          {criarBotton(props, "Instagram", "Instagram")}
          {criarBotton(props, "Twitch", "Twitch")}
          {criarBotton(props, "Youtube", "Youtube")}
        </div>
      </div>

      <PainelLogin />

      <div
        className="menu-squerdo-shop menu-squerdo-padrao mt-2"
        onClick={() => props.novaRota("Shopping")}
      >
        <img src={bannerShop} alt="logo" className="img-fluid mt-2" />
      </div>

      <div className="menu-squerdo-status menu-squerdo-padrao mt-2">
        <p>
          Status do Server: <span className="text-success">Online</span>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    rota: state.rota.rota,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    novaRota(rota) {
      dispatch({
        type: "ROTA",
        payload: rota,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuEsquerdo);
