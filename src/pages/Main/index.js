import React from "react";
import "./styles.css";
import { FiArrowDownCircle, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import axios from "axios";
import torre from "../../assets/torre.png";

import ResponsivePlayer from "../../Components/ResponsivePlayer";

const Main = () => {
  function download() {
    axios({
      url: "http://localhost:3333/download", //your url
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "desenho.jpg"); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  }

  return (
    <div id="container">
      <header>
        <h1>RES for Kids</h1>
      </header>

      <div id="conteudo">
        <div className="container">
          <div className="item1">
            <button id="Beolica"></button>
            <a href="#eolica" id="Teolica">
              Energia Eólica
            </a>
          </div>
          <div className="item2">
            <button id="Bsolar"></button>
            <a href="#solar" id="Tsolar">
              Energia Solar
            </a>
          </div>
        </div>

        <h1 id="eolica">Energia Eólica</h1>
        <ResponsivePlayer url="https://www.youtube.com/watch?v=4NRXx6U8ABQ" />

        <h1 id="quiz">Quiz</h1>

        <div className="containerPergunta">
          <div id="item1"></div>
          <div id="item2"></div>
        </div>

        <div class="containerResposta">
          <label for="01">
            <input type="radio" name="sexo" id="01" value="01" />
            <img src={torre} alt="Masculino" />
          </label>
          <label for="02">
            <input type="radio" name="sexo" id="02" value="02" />
            <img src={torre} alt="Feminino" />
          </label>
          <label for="03">
            <input type="radio" name="sexo" id="03" value="03" />
            <img src={torre} alt="Masculino" />
          </label>
          <label for="04">
            <input type="radio" name="sexo" id="04" value="04" />
            <img src={torre} alt="Feminino" />
          </label>
        </div>

        <button id="download" onClick={download}>
          <strong>Desenho_01</strong>
          <FiArrowDownCircle />
        </button>
      </div>
    </div>
  );
};

export default Main;
