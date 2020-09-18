import Axios from 'axios';

export function getAllPosts(): Promise<Post[]> {
    return Axios.get('https://simple-blog-api.crew.red/posts').then((res) => res.data);
}
