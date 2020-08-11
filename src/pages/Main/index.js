import React, { useState, useEffect } from 'react';
import './styles.css';
import { FiArrowDownCircle } from 'react-icons/fi';
import api from '../../services/api';
import axios from 'axios';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import data from './data.json';
import useSound from 'use-sound';
import musica from '../../assets/whatever.mp3';
import ResponsivePlayer from '../../Components/ResponsivePlayer';
import Quiz from '../../Components/Quiz';

const Main = () => {
  const [play] = useSound(musica);

  function download() {
    axios({
      url: 'https://resbackend.herokuapp.com/download', //your url
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'desenho.jpg'); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  }

  return (
    <Jumbotron id="container">
      <header>
        <h1>Res for kids</h1>
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

        <Quiz quizId={2} />

        <Container>
          <Row>
            <Col>
              {' '}
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
      </Jumbotron>
    </Jumbotron>
  );
};

export default Main;
