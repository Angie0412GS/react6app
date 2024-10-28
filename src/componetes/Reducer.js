const estadoInicial = { cuenta: 0 };

export const reductorContador = (estado = estadoInicial, accion) => {
  switch (accion.type) {
    case "INCREMENTO":
      return { cuenta: estado.cuenta + 1 };

    case "DECREMENTO":
      return { cuenta: estado.cuenta - 1 };

    case "REINICIO":
      return { cuenta: 0 };

    default:
      return estado;
  }
};
