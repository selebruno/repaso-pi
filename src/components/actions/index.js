export const GET_ALL_USERS = 'GET_ALL_USERS'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POST_CATEGORIAS = 'GET_POST_CATEGORIAS'
export const GET_ALL_CATEGORIAS = 'GET_ALL_CATEGORIAS'
export const POST_CATEGORIA = 'POST_CATEGORIA'
 
const BASE_URL = 'http://localhost:3001'
 
export function getAllUsers(){
    return function(dispatch){
        return fetch(`${BASE_URL}/usuario/all`)
        .then(res => res.json())
        .then(data =>dispatch({type: GET_ALL_USERS, payload: data}))
        .catch(err => console.log(err))
    }
}
 
export function getAllPosts(){
    return function(dispatch){
        return fetch(`${BASE_URL}/post`)
        .then(res => res.json())
        .then(data =>dispatch({type: GET_ALL_POSTS, payload: data}))
        .catch(err => console.log(err))
    }
}
 
export function getAllCategorias(){
    return function(dispatch){
        return fetch(`${BASE_URL}/categoria/all`)
        .then(res => res.json())
        .then(data =>dispatch({type: GET_ALL_CATEGORIAS, payload: data}))
        .catch(err => console.log(err))
    }
}

export function arregloDeCategorias(id, categorias){
    var ca= {categorias : categorias}
    return function(dispatch){
    return fetch(`${BASE_URL}/post/${id}/addcategorias`, {
        method: 'POST',
        headers: {
              'Content-Type': 'application/json'
        },
            body: JSON.stringify(ca)
        })
        .then(res => res.json())
        .then(data =>dispatch({type: GET_POST_CATEGORIAS, payload: data}))
        .catch(err => console.log(err))
    }
}
 
export function getPostCategorias(id){
    return function(dispatch){
        return fetch(`${BASE_URL}/post/${id}`)
        .then(res => res.json())
        .then(data =>dispatch({type: GET_POST_CATEGORIAS, payload: data}))
        .catch(err => console.log(err))
    }
}
 
export function crearCategoria(categoria){
    return function(dispatch){
        return fetch(`${BASE_URL}/categoria`, {
        method: 'POST',
        headers: {
              'Content-Type': 'application/json'
        },
            body: JSON.stringify(categoria)
        })
        .then(res => res.json())
        .then(data =>dispatch({type: POST_CATEGORIA, payload: data}))
        .catch(err => console.log(err))
      }
    
}
