import React, { useState, useEffect } from 'react';
import './styles.css';
import { FiArrowDownCircle } from 'react-icons/fi';

import axios from 'axios';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

import ResponsivePlayer from '../../Components/ResponsivePlayer';
import Quiz from '../../Components/Quiz';

const Main = () => {
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
    <Jumbotron id="container-principal" className="container">
      <header id="header">
        <h1>Res for kids</h1>
      </header>

      <Jumbotron id="conteudo">
        <div className="container-ancora">
          <button id="Beolica"></button>
          <a href="#eolica" id="Teolica">
            Energia Eólica
          </a>

          <button id="Bsolar"></button>
          <a href="#solar" id="Tsolar">
            Energia Solar
          </a>
        </div>

        <h1 id="eolica">Energia Eólica</h1>
        <ResponsivePlayer url="https://www.youtube.com/watch?v=B69rVmtIg34" />

        <h1 id="quiz">Quiz</h1>

        <Quiz quizId={2} />
        <h1>Desenhos</h1>
        <Container className="container-desenhos">
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
