import React from "react";
import "./proyects.css";
import landing from "../../images/landing-page.png";
import { Button } from "@material-ui/core";

const Poryects = ({
  imagePage,
  title,
  description,
  codeUrl,
  proyectUrl,
  backgroundClass,
}) => {
  return (
    <section className={`proyectsSection ${backgroundClass}`}>
      <div className="wrapper proyectContent ">
        <div className="columnOne ">
          <img src={imagePage} alt="" />
        </div>
        <div className="columnTwo  ">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="contentButton">
            <Button
              variant="contained"
              color="info"
              href={proyectUrl}
              target="_blank"
            >
              ver proyecto
            </Button>
            <Button
              variant="outlined"
              color="info"
              href={codeUrl}
              target="_blank"
            >
              ver código
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poryects;
