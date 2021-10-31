import axios from 'axios';

const imagesApi = axios.create({
  baseURL: 'https://resbackimagens.herokuapp.com/'
});

const backendApi = axios.create({
  baseURL: 'https://resbackend.herokuapp.com/'
});

export { imagesApi, backendApi };
