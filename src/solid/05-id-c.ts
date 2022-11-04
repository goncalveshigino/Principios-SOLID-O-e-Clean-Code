import localPost from '../data/local-database.json';
import localPost_b from '../data/local-database-b.json';
import { Post } from './05-id-b';



export abstract class PostProvider {

   abstract getPosts(): Promise<Post[]>
    
}


export class LocalDataBaseService implements PostProvider{

    constructor() {}

    async getPosts() {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }]
    }

}


export class JsonDataBaseService implements PostProvider{

    async getPosts() {
        return localPost;
    }

}

export class WebApiPostService implements PostProvider {

 
    // async getPosts() {
    //     return localPost_b;
    // }

    async getPosts(): Promise<Post[]> {

        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await resp.json();
    }
}


