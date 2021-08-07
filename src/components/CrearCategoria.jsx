import { useState } from "react";
import { connect } from "react-redux"
import { crearCategoria } from "./actions/index"

export function CrearCategoria(props) {
  const [state, setState] = useState({
    name: "",
  })


  function handleChange(event) {
    setState({
      name:  event.target.value
    })
  }
  

  function handleSubmit(event) {
    event.preventDefault()
    props.crearCategoria(state)
    .then(()=>{
      setState({name: ""})
      alert("Se creó la categoría correctamente")
    })
  }
  return (
    <>
    <form onSubmit = {handleSubmit}>
      <input name= "name" placeholder="ingresar categoria" onChange={handleChange}/>
      <button type="submit">Crear</button>
    </form>
    </>
  )
}
export function mapStateToProps(state) {
  return {
    categorias: state.categorias
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    crearCategoria: (categoria) => dispatch(crearCategoria(categoria)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CrearCategoria)
