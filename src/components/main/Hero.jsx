import React from "react";
import "./hero.css";
import avatar from "../../images/anthony.png";
import Button from "@material-ui/core/Button";
import pdf from "../../images/pdf/CV-AnthonySanchez.pdf";
import pdf2 from "../../images/pdf/portafolio-anthony-esp.pdf";

const Hero = () => {
  return (
    <section className="heroContent  ">
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

        <div className="contentButton portafolio">
          <h4>Portafolios:</h4>
          <div className="buttonContainer">
            <Button variant="outlined" color="info" href={pdf2} download>
              Descargar currículum (español)
            </Button>
            <Button variant="outlined" color="info" href={pdf} download>
              Descargar currículum (inglés)
            </Button>
          </div>
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
