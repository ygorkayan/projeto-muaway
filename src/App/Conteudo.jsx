import React from "react";
import { connect } from "react-redux";
import "./components/CSS/Conteudo.css";

import Home from "./components/Home";
import Cadastrar from "./components/Cadastrar";
import Ajuda from "./components/Ajuda";
import Downloads from "./components/Downloads";
import Facebook from "./components/Facebook";
import Forum from "./components/Forum";
import GoldsWays from "./components/GoldsWays";
import Informaçoes from "./components/Informaçoes";
import Instagram from "./components/Instagram";
import Ranking from "./components/Ranking";
import Revenda from "./components/Revenda";
import Shopping from "./components/Shopping";
import Twitch from "./components/Twitch";
import Twitter from "./components/Twitter";
import Youtube from "./components/Youtube";

const Conteudo = (props) => {
  switch (props.rota) {
    case "Cadastrar":
      return <Cadastrar />;
    case "Ajuda":
      return <Ajuda />;
    case "Downloads":
      return <Downloads />;
    case "Facebook":
      return <Facebook />;
    case "Forum":
      return <Forum />;
    case "GoldsWays":
      return <GoldsWays />;
    case "Informaçoes":
      return <Informaçoes />;
    case "Instagram":
      return <Instagram />;
    case "Ranking":
      return <Ranking />;
    case "Revenda":
      return <Revenda />;
    case "Shopping":
      return <Shopping />;
    case "Twitch":
      return <Twitch />;
    case "Twitter":
      return <Twitter />;
    case "Youtube":
      return <Youtube />;

    default:
      return <Home />;
  }
};

const mapStateToProps = (state) => {
  return {
    rota: state.rota.rota,
  };
};

export default connect(mapStateToProps)(Conteudo);
