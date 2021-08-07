import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllUsers, getAllCategorias } from "./actions";
import { Link } from "react-router-dom";

export function Home(props){
  useEffect(()=>{
    props.getAllUsers()
    .then(() =>{
        props.getAllCategorias()
    })
  },[props])
    return(
        <div className="App-header">
        <h5>Repaso</h5>
        <Link to ="/posts">Ingresar</Link>
        </div>
    )
}

export function mapDispatchToProps(dispatch){
   return {
       getAllUsers: ()=>dispatch(getAllUsers()),
       getAllCategorias: ()=>dispatch(getAllCategorias()),
   }
}

export default connect(
    null,
    mapDispatchToProps,
)(Home)
