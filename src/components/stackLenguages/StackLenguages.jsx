import React from "react";
import "./stack.css";
import htmlIcon from "../../images/stack/html.png";
import cssIcon from "../../images/stack/css.png";
import javascriptIcon from "../../images/stack/javascript.png";
import firebaseIcon from "../../images/stack/firebase.png";
import githubIcon from "../../images/stack/github.png";
import figmaIcon from "../../images/stack/figma.png";
import reactIcon from "../../images/stack/reactjs.png";
import pythonIcon from "../../images/stack/python.png";
import npmIcon from "../../images/stack/npm.png";
import bootstrapIcon from "../../images/stack/bootstrap.png";

const StackLenguages = () => {
  return (
    <section>
      <div className="wrapper">
        <h1 className="text-center">Habilidades y Herramientas</h1>
        <div className="stackIcons">
          <div className="iconContent">
            <img src={htmlIcon} alt="icono de html" />
          </div>
          <div className="iconContent">
            <img src={cssIcon} alt="icono de css" />
          </div>
          <div className="iconContent">
            <img src={javascriptIcon} alt="icono de javascript" />
          </div>
          <div className="iconContent">
            <img src={firebaseIcon} alt="ícono de firebase" />
          </div>
          <div className="iconContent">
            <img src={githubIcon} alt="ícono de github" />
          </div>
          <div className="iconContent">
            <img src={figmaIcon} alt="ícono de figma" />
          </div>

          <div className="iconContent">
            <img src={reactIcon} alt="ícono de reactjs" />
          </div>

          <div className="iconContent">
            <img src={pythonIcon} alt="ícono de python" />
          </div>
          <div className="iconContent">
            <img src={npmIcon} alt="ícono de npm" />
          </div>
          <div className="iconContent">
            <img src={bootstrapIcon} alt="ícono de Bootstrap" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackLenguages;
