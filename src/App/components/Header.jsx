import React from "react";
import "./CSS/Header.css";
import { connect } from "react-redux";
import img from "./img/1header-bg.jpg";

const criarBotton = (props, nome, rota) => {
  return (
    <button
      type="button"
      className="btn btn-secondary header-menu-btn"
      onClick={() => props.novaRota(rota)}
    >
      {nome}
    </button>
  );
};

const Header = (props) => {
  return (
    <div className="header mb-2">
      <div className="header-banner">
        <img src={img} alt="logo" className="img-fluid" />
      </div>

      <div className="header-menu">
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group mr-2" role="group" aria-label="First group">
            {criarBotton(props, "Home", "Home")}
            {criarBotton(props, "Cadastrar", "Cadastrar")}
            {criarBotton(props, "Downloads", "Downloads")}
            {criarBotton(props, "Ranking", "Ranking")}
            {criarBotton(props, "Forum", "Forum")}
            {criarBotton(props, "Shopping", "Shopping")}
            {criarBotton(props, "GoldsWays", "GoldsWays")}
            {criarBotton(props, "Revenda", "Revenda")}
          </div>
        </div>
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
        type: rota,
        payload: rota,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
