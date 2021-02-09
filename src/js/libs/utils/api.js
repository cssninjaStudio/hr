import axios from 'axios';

export default function getBaseAPI() {
    return axios.create({
        baseURL: 'http://localhost:5080'
        //baseURL: 'https://whispering-castle-04462.herokuapp.com/https://ninja-json-server.herokuapp.com'
    })
}