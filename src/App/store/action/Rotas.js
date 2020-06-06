const estadoInicial = {
  rota: "Home",
};

export default (state = estadoInicial, action) => {
  if ((action.type = "ROTA")) {
    return {
      rota: action.payload,
    };
  }

  return state;
};
