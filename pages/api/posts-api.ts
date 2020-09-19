import Axios from 'axios';

export function getAllPosts(): Promise<Post[]> {
    return Axios.get('https://simple-blog-api.crew.red/posts').then((res) => res.data);
}

export function getPostDetails(postId: string): Promise<Post> {
    return Axios.get(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`).then((res) => res.data);
}
