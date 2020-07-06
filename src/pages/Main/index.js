import React, { useState } from "react";
import "./styles.css";
import {
  FiArrowDownCircle,
  FiArrowLeft,
  FiArrowRight,
  FiVolume2,
} from "react-icons/fi";
import axios from "axios";
import torre from "../../assets/torre.png";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import useSound from "use-sound";
import musica from "../../assets/whatever.mp3";
import ResponsivePlayer from "../../Components/ResponsivePlayer";

const Main = () => {
  const [play] = useSound(musica);
  const [data, setData] = useState([]);

  async function loadingJson() {
    let response = await fetch("../../assets/data.json");
    let dados = await response.json();

    setData(dados);
  }

  function download() {
    axios({
      url: "https://resbackend.herokuapp.com/download", //your url
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
    <Jumbotron id="container">
      <header>
        <h1>RES for Kids</h1>
      </header>

      <Jumbotron id="conteudo">
        <Container bsPrefix="container">
          <Row>
            <Col className="item1">
              <button id="Beolica"></button>
              <a href="#eolica" id="Teolica">
                Energia Eólica
              </a>
            </Col>
            <Col className="item2">
              <button id="Bsolar"></button>
              <a href="#solar" id="Tsolar">
                Energia Solar
              </a>
            </Col>
          </Row>
        </Container>

        <h1 id="eolica">Energia Eólica</h1>
        <ResponsivePlayer url="https://www.youtube.com/watch?v=4NRXx6U8ABQ" />

        <h1 id="quiz">Quiz</h1>

        <Jumbotron bsPrefix="containerPergunta">
          <Jumbotron id="item1"></Jumbotron>
          <Jumbotron id="item2">
            <button id="audioPergunta">
              <FiVolume2 onClick={play} />
            </button>
          </Jumbotron>
        </Jumbotron>

        <Container bsPrefix="containerResposta">
          <Row>
            <label for="01">
              <input type="radio" name="opcao" id="01" value="01" />
              <img src={torre} alt="Masculino" />
              <div>
                <button id="audioResposta" onClick={play}>
                  <FiVolume2 />
                </button>
              </div>
            </label>
            <label for="02">
              <input type="radio" name="opcao" id="02" value="02" />
              <img src={torre} alt="Feminino" />
              <div>
                <button id="audioResposta" onClick={play}>
                  <FiVolume2 />
                </button>
              </div>
            </label>
          </Row>
          <Row>
            <label for="03">
              <input type="radio" name="opcao" id="03" value="03" />
              <img src={torre} alt="Masculino" />
              <div>
                <button id="audioResposta" onClick={play}>
                  <FiVolume2 />
                </button>
              </div>
            </label>
            <label for="04">
              <input type="radio" name="opcao" id="04" value="04" />
              <img src={torre} alt="Feminino" />
              <div>
                <button id="audioResposta" onClick={play}>
                  <FiVolume2 />
                </button>
              </div>
            </label>
          </Row>
        </Container>

        <Container bsPrefix="acoes">
          <Row>
            <Col>
              <button id="anterior" onClick={() => {}}>
                <FiArrowLeft />
                <strong>Anterior</strong>
              </button>
            </Col>
            <Col>
              <button id="proxima" onClick={() => {}}>
                <strong>Próxima</strong>
                <FiArrowRight />
              </button>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              {" "}
              <button id="download" onClick={download}>
                <strong>Desenho_01</strong>
                <FiArrowDownCircle />
              </button>
            </Col>
          </Row>
          <Row>
            <Col>
              <button id="download" onClick={download}>
                <strong>Desenho_01</strong>
                <FiArrowDownCircle />
              </button>
            </Col>
          </Row>
        </Container>
        <ul>
          {data.map(function (quiz) {
            return (
              <li>
                {quiz.pergunta} - {quiz.resposta}
              </li>
            );
          })}
        </ul>
      </Jumbotron>
    </Jumbotron>
  );
};

export default Main;
