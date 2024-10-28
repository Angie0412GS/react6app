import React from "react";
import '../styles/inicio_sobre.css';
import img from '../img/perrito.jfif';

function Inicio() {
  return (
    <div className="inicio-container">
      <h1 className="inicio-titulo">Compañeros Leales y Multifacéticos</h1>
      <img className="inicio-img" src={img} alt="Perrito" />
    </div>
  );
}

export default Inicio;
