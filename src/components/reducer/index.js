import { GET_ALL_USERS, GET_ALL_POSTS, GET_POST_CATEGORIAS, GET_ALL_CATEGORIAS, POST_CATEGORIA } from '../actions/index'
 
const initialState={
    usuarios : [],
    categorias: [],
    posts: [],
    postCategorias: []
}
 
export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_ALL_USERS:
          return{
              ...state,
              usuarios: action.payload
          }
        case GET_ALL_POSTS:
            return{
                ...state,
                posts: action.payload
            }
        case GET_POST_CATEGORIAS:
            return{
                ...state,
                postCategorias: action.payload
            }  
        case GET_ALL_CATEGORIAS:
            return{
                ...state,
                categorias: action.payload
            }    
        case POST_CATEGORIA:
            return{
                ...state,
                categorias: [...state.categorias, action.payload]
            }      
        default: return state
    }
}
