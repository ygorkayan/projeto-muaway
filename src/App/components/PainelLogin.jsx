import React from "react";
import "./CSS/PainelLogin.css";

export default (props) => {
  return (
    <div className="painelLogin mt-2">
      <div className="alert alert-secondary" role="alert">
        Painel do usuário
      </div>
      <div className="container">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Login"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Senha"
            />
          </div>
          <button type="submit" className="btn btn-light">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
