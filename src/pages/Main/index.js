import React from "react";
import "./styles.css";
import { FiArrowDownCircle, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import axios from "axios";
import torre from "../../assets/torre.png";
import ResponsivePlayer from "../../Components/ResponsivePlayer";

import FileDownload from "js-file-download";

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
        <ResponsivePlayer url="https://www.youtube.com/watch?v=4NRXx6U8ABQ" />
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

        <button onClick={download}>
          <strong>Download</strong>
          <FiArrowDownCircle />
        </button>
      </div>
    </div>
  );
};

export default Main;
