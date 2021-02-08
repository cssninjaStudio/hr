import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5080';
//axios.defaults.baseURL = "https://ninja-json-server.herokuapp.com";

export function initPosts() {
    return {
        getPosts(){
            const _this = this;
            axios.get('/posts')
                .then(response => {
                    console.log(response.data);
                    _this.posts = response.data;
                })
                .catch(error => {
                    console.log(error)
            })
        },
        posts: []
    }
}