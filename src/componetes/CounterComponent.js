import React from "react";
import '../styles/CounterComponent.css';
import { useSelector, useDispatch } from "react-redux";
import { incremento, decremento, reiniciar } from "./Actions";

const ComponenteContador = () => {
  const cuenta = useSelector((estado) => estado.cuenta);
  const dispatch = useDispatch();

  return (
    <div className="counter-card">
      <h1>Contador: {cuenta}</h1>
      <button onClick={() => dispatch(incremento())}>Incrementar</button>
      <button onClick={() => dispatch(decremento())}>Decrementar</button>
      <button onClick={() => dispatch(reiniciar())}>Reiniciar</button>
    </div>
  );
};

export default ComponenteContador;
