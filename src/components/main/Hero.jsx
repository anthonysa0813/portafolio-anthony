import React from "react";
import "./hero.css";
import avatar from "../../images/anthony.png";
import Button from "@material-ui/core/Button";

const Hero = () => {
  return (
    <section className="heroContent ">
      <div className="heroInfo">
        <h1>
          Hola ✋, Soy Anthony Sanchez un Frontend en el stack de Reactjs y
          apasionado por la tecnología.
        </h1>
        <p>
          Me encanta centrarme en los detalles de las experiencias de nuevos
          productos con una implementación en código perfecta. Pero los grandes
          productos no comienzan ahí, comienzan con una sólida colaboración con
          los compañeros de equipo de investigación, ingeniería y productos para
          comprender los problemas y las circunstancias de los clientes.
        </p>
        <div className="contentButton ">
          <Button variant="outlined" color="info">
            Descargar Currículum
          </Button>
        </div>
      </div>
      <div className="heroImage">
        <div className="imageLogoContent ">
          <img src={avatar} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
