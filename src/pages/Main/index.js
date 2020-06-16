import React from "react";
import "./styles.css";
import { FiArrowDownCircle, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import torre from "../../assets/torre.png";
import { Player } from "video-react";

const Main = () => {
  return (
    <div id="container">
      <header>
        <h1>RES for Kids</h1>
      </header>

      <div id="conteudo">
        <Player>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
        <form action="">
          <h1>QUIZ</h1>
          <h2>Aqui vai a pergunta</h2>
          <ul className="items-grid">
            <li>
              <img src={torre} />
              <br />
              <span>Torre</span>
            </li>
            <li>
              <img src={torre} />
              <br />
              <span>Torre</span>
            </li>
            <li>
              <img src={torre} />
              <br />
              <span>Torre</span>
            </li>
            <li>
              <img src={torre} />
              <br />
              <span>Torre</span>
            </li>
          </ul>
          <button>
            <span>
              <FiArrowLeft />
            </span>
            <strong>Anterior</strong>
          </button>
          <button>
            <strong>Proxima</strong>
            <span>
              <FiArrowRight />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Main;
