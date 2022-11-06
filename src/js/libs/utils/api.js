import axios from 'axios';

export default function getBaseAPI() {
    return axios.create({
        // to replace the url server, check gulp file on javascriptBuild
        baseURL: '{{API_SERVER}}'
    })
}