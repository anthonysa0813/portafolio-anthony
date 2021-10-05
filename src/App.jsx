import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/main/Hero";
import Poryects from "./components/proyects/Poryects";
import landingBatata from "./images/landing-page.png";
import spotifu from "./images/spotifu.png";
import lasfam from "./images/lasfamstore.png";
import StackLenguages from "./components/stackLenguages/StackLenguages";

const App = () => {
  return (
    <>
      <div className="wrapper ">
        <Header />
        <Hero />
      </div>
      <h1 className="text-center" id="proyectos">
        Proyectos
      </h1>
      <Poryects
        title="Landing Page de BatataBit"
        description="La próxima revolución en el intercambio de criptomonedas.
Batatabit te ayuda a navegar entre los diferentes precios y tendencias."
        imagePage={landingBatata}
        codeUrl="https://github.com/anthonysa0813/responsive-design-course"
        proyectUrl="https://anthonysa0813.github.io/responsive-design-course/?fbclid=IwAR3wn4b50cJE1dkQX9zwDzGWlRlf35bUFgmnKz6Q6ayPvMghbXILOnMssRo#plans"
        backgroundClass="batataBit"
      />
      <Poryects
        title="Clon de Spotify"
        description="Escucha tu música favorita sin interrupciones, la mejora plataforma musical del mundo."
        imagePage={spotifu}
        codeUrl="https://github.com/anthonysa0813/spotifu"
        proyectUrl="https://jolly-beaver-6c1b4f.netlify.app/"
      />{" "}
      <Poryects
        title="LasfamStore"
        description="Tienda online de los mejores artículos deportivos al alcance de tus bolsillos."
        imagePage={lasfam}
        codeUrl="https://github.com/anthonysa0813/lasfamStore"
        proyectUrl="https://focused-meitner-a432a1.netlify.app/"
        backgroundClass="lasfamStore"
      />
      <StackLenguages />
      <section className="contactoSection" id="contactos">
        <div className="wrapper contact">
          <span>Estoy encantado de responder a su próximo proyecto.</span>
          <a href="mailto:anthonysa0813@gmail.com">anthonysa0813@gmail.com</a>
        </div>
      </section>
    </>
  );
};

export default App;
