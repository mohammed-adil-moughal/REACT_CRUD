import axios from 'axios';

export const FETCH_POSTS ='fetch_posts';
export const CREATE_POSTS='create_post';
export const FETCH_POST ='fetch_post';
export const DELETE_POST='delete_post';

const ROOT_URL="http://reduxblog.herokuapp.com/api";
const API_KEY="?key=ADILADIL"
export function fetchPosts()
{  
     const url=`${ROOT_URL}/posts${API_KEY}`;
    const request=axios.get(url);
   // console.log('action',request);
      return{
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values,callback)
{
    const url=`${ROOT_URL}/posts${API_KEY}`;
    const request=axios.post(url,values).then(()=>callback());
   // console.log('action',request);
    return{
        type: CREATE_POSTS,
        payload: request
    }
 
}

export function fetchPost(id)
{
    const url=`${ROOT_URL}/posts/${id}${API_KEY}`;
    const request=axios.get(url);

    return{
        type: FETCH_POST,
        payload: request
    }
 
}

export function deletePost(id,callback)
{
    const url=`${ROOT_URL}/posts/${id}${API_KEY}`;
    const request=axios.delete(url).then(()=>callback());
   console.log('action',url);
   console.log('actionn',request);
    return{
        type: DELETE_POST,
        payload: id
    }
}
