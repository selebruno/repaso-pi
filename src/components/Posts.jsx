import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getAllPosts } from "./actions"
import { Link } from "react-router-dom"

export function Posts(props){
    const[state, setState] = useState("")
    const[search, setSearch] = useState("")

    useEffect(()=>{
        props.getAllPosts()
        .then(p =>{
            setState(props.posts)
           
        })
      },[])

       function handleChange(event) {
        setSearch( event.target.value );
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        /*setState( state.filter(p => p.title.includes(search)))
        setSearch("")*/
        setState( state.filter(elem => elem.title.includes(search)))
      }

      function viewAllPost(){
        setState(props.posts)
      }
     
    
    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input name= "title" placeholder="ingresar titulo" onChange={handleChange}/>
                <button type="submit">buscar</button>
            </form>
            <button className="btn2" onClick={() => viewAllPost()}>VER TODOS</button>
            <h2>Posts</h2>
            <ul>
            {!state ? <p>Esperando....</p> : 
            state.map(post =>{
                return (
                <><li key={post.id}>ID {post.id}:{post.title}</li>
                <Link to={`/posts/${post.id}`}>Detalle</Link></>
                )
             })
            }
            </ul>
        </div>
    )
}
export function mapStateToProps(state){
    return{
        posts: state.posts
    }
}

export function mapDispatchToProps(dispatch){
    return{
        getAllPosts: ()=> dispatch(getAllPosts())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Posts)