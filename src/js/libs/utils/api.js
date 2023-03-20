import axios from 'axios';

const apiServer = import.meta.env.PROD ? 'https://api-hr.cssninja.io/' : 'http://localhost:8090'

export default function getBaseAPI() {
    return axios.create({
        // to replace the url server, check gulp file on javascriptBuild
        baseURL: apiServer
    })
}