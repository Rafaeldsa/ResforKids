import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { FiVolume2, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import './styles.css';

const Quiz = ({ quizId }) => {
  const [perguntas, setPerguntas] = useState([]);
  const [imagemPergunta, setImagem] = useState([]);
  const [audio, setAudio] = useState([]);

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
  console.log(imagemPergunta);
  return (
    <div>
      <div className="containerPergunta">
        <div id="item1">
          <img src={imagemPergunta[0]} alt="imagem da pergunta" />
        </div>
        <div id="item2">
          <p>{perguntas[1]}</p>
          <button id="audioPergunta">
            <FiVolume2 onClick={audio} />
          </button>
        </div>
      </div>

      <Container bsPrefix="containerResposta">
        <Row>
          <label htmlFor="01">
            <input type="radio" name="opcao" id="01" value="01" />
            <img src={imagemPergunta[0]} alt="Masculino" />
            <p>olaaaa</p>
          </label>
          <label htmlFor="02">
            <input type="radio" name="opcao" id="02" value="02" />
            <img src={imagemPergunta[0]} alt="Feminino" />
            <p>olaaaa</p>
          </label>
        </Row>
        <Row>
          <label htmlFor="03">
            <input type="radio" name="opcao" id="03" value="03" />
            <img src={imagemPergunta[0]} alt="Masculino" />
            <p>olaaaa</p>
          </label>
          <label htmlFor="04">
            <input type="radio" name="opcao" id="04" value="04" />
            <img src={imagemPergunta[0]} alt="Feminino" />
            <p>olaaaa</p>
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
    </div>
  );
};

export default Quiz;
