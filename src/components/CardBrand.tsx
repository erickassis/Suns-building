import React from "react";
import { useAuth } from "./AuthContext";
import { buscarImagem } from "./buscarImagem";
import "../styles/CardBrand.css";

const CardBrand = () => {
  const { currentUser } = useAuth();
  const nomeVisitante = currentUser ? currentUser.email?.split("@")[0].toUpperCase() : "Visitante";

  return (
    <div className="container-cardbrand">
      <div className="container-limitador-cardbrand">
        <div>
          <img src={buscarImagem("skyscraper")} alt="Skyscraper" />
        </div>
        <div className="container-titulo-cardbrand">
          <h1>Bem Vindo {nomeVisitante}</h1>
        </div>
      </div>
    </div>
  );
};

export default CardBrand;
