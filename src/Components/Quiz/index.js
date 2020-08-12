import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { FiVolume2, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import './styles.css';

const Quiz = ({ quizId }) => {
  const [perguntas, setPerguntas] = useState([]);
  const [imagemPergunta, setImagem] = useState([]);
  const [audio, setAudio] = useState([]);
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    axios({
      url: `https://resbackimagens.herokuapp.com/perguntas-quiz?quizId=${2}`, //your url
      method: 'GET',
      responseType: 'json', // important
    }).then((response) => {
      const data = response.data;
      const perguntas = data.map((pergunta) => {
        return pergunta.pergunta;
      });
      const imagemPergunta = data.map((imagem) => {
        return imagem.imgPergunta;
      });
      const audioPergunta = data.map((audio) => {
        return audio.audioPergunta;
      });
      setPerguntas(perguntas);
      setImagem(imagemPergunta);
      setAudio(audioPergunta);
    });
  }, []);
  console.log(perguntas);
  return (
    <div>
      <div className="containerPergunta">
        <div id="item1">
          <img src={imagemPergunta[indice]} alt="imagem da pergunta" />
        </div>
        <div id="item2">
          <p>{perguntas[indice]}</p>
          <button id="audioPergunta">
            <FiVolume2 onClick={audio[indice]} />
          </button>
        </div>
      </div>

      <Container bsPrefix="containerResposta">
        <Row>
          <label htmlFor="01">
            <input type="radio" name="opcao" id="01" value="01" />
            <img src={imagemPergunta[indice]} alt="Masculino" />
            <p>olaaaa</p>
          </label>
          <label htmlFor="02">
            <input type="radio" name="opcao" id="02" value="02" />
            <img src={imagemPergunta[indice]} alt="Feminino" />
            <p>olaaaa</p>
          </label>
        </Row>
        <Row>
          <label htmlFor="03">
            <input type="radio" name="opcao" id="03" value="03" />
            <img src={imagemPergunta[indice]} alt="Masculino" />
            <p>olaaaa</p>
          </label>
          <label htmlFor="04">
            <input type="radio" name="opcao" id="04" value="04" />
            <img src={imagemPergunta[indice]} alt="Feminino" />
            <p>olaaaa</p>
          </label>
        </Row>
      </Container>

      <Container bsPrefix="acoes">
        <Row>
          <Col>
            <button
              id="anterior"
              onClick={() => {
                if (indice === 0) {
                  return;
                }
                setIndice(indice - 1);
              }}
            >
              <FiArrowLeft />
              <strong>Anterior</strong>
            </button>
          </Col>
          <Col>
            <button
              id="proxima"
              onClick={() => {
                if (indice === 1) {
                  return;
                }
                setIndice(indice + 1);
              }}
            >
              <strong>Próxima</strong>
              <FiArrowRight />
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Quiz;
