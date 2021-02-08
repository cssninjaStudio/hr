import axios from 'axios';

export default function getBaseAPI() {
    return axios.create({
        baseURL: 'http://localhost:5080'
        //baseURL: 'https://ninja-json-server.herokuapp.com/'
    })
}