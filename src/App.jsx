import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/main/Hero";
import Poryects from "./components/proyects/Poryects";
import landingBatata from "./images/landing-page.png";
import spotifu from "./images/spotifu.png";
import lasfam from "./images/lasfamstore.png";
import blockMaster from "./images/blockBuster.png";
import StackLenguages from "./components/stackLenguages/StackLenguages";
import tiendita from "./images/tiendita.png";
import cart from "./images/store.png";
import landingPhone from "./images/landing.png";
import expensable from "./images/expansable.png";

const App = () => {
  return (
    <>
      <div className="headPolygon  ">
        <div className="wrapper">
          <Header />
          <Hero />
        </div>
      </div>
      <Poryects
        title="Tiendita Store"
        description="Tienda virtual de productos de primera necesidad. (Proyecto Responsivo)"
        imagePage={tiendita}
        codeUrl="https://github.com/anthonysa0813/tienda-app"
        proyectUrl="https://eager-fermat-ec8953.netlify.app/"
        backgroundClass="tiendita"
        nota="Proyecto responsivo"
        textColor="blue"
        stack={["reactjs", "javascript", "css", "html", "consumo de api"]}
      />
      <Poryects
        title="Expensable"
        description="Aplicación web que te ayudará a registrar tus gastos mensuales y tener un registro de ello. Realizado en Reactjs + Ruby on Rails. (Proyecto no Responsive)"
        imagePage={expensable}
        codeUrl="https://github.com/anthonysa0813/expensable/tree/main/calcuator-app"
        proyectUrl="https://gentle-dragon-954411.netlify.app/login"
        backgroundClass="expensable"
        nota="Proyecto No responsivo"
        textColor="red"
        stack={[
          "reactjs",
          "javascript",
          "css",
          "html",
          "consumo de api",
          "ruby on Rails",
        ]}
      />
      <Poryects
        title="Landing Page de BatataBit"
        description="La próxima revolución en el intercambio de criptomonedas.
Batatabit te ayuda a navegar entre los diferentes precios y tendencias."
        imagePage={landingBatata}
        codeUrl="https://github.com/anthonysa0813/responsive-design-course"
        proyectUrl="https://anthonysa0813.github.io/responsive-design-course/?fbclid=IwAR3wn4b50cJE1dkQX9zwDzGWlRlf35bUFgmnKz6Q6ayPvMghbXILOnMssRo#plans"
        backgroundClass="asbatataBit"
        nota="Proyecto responsivo"
        textColor="blue"
        stack={["css", "html", "responsive design"]}
      />
      <Poryects
        title="Block Master"
        description="Busca películas y encuentra la mejor información sobre ellas en Block Master"
        imagePage={blockMaster}
        codeUrl="https://github.com/anthonysa0813/blockBuster"
        proyectUrl="https://nifty-mahavira-10df6b.netlify.app/"
        backgroundClass="lasfamStoreasas mt-2 "
        nota="Proyecto responsivo"
        textColor="blue"
        stack={["css", "html", "responsive design", "reactjs"]}
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
