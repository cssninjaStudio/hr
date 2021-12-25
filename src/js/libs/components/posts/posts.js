import getBaseAPI from '../../utils/api';

export function initPosts() {
    return {
        getPosts(){
            const _this = this;
            getBaseAPI().get('/posts')
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