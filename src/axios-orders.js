import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder11.firebaseio.com/'
});

export default instance;