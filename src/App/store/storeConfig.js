import { createStore, combineReducers } from "redux";
import Rotas from "./action/Rotas";

const reducers = combineReducers({
  rota: Rotas,
});

export default () => createStore(reducers);
