import { useEffect, useState } from "react"
import { getPostCategorias, arregloDeCategorias} from "./actions/index"
import { connect } from "react-redux"
import Select from "react-select"

export function DetallePost(props) {
    const options = props.categorias.map(c => ({ value: c.id, label: c.name }))

    const [categorias, setCategorias] = useState([])
   
    useEffect(() => {
        const id = props.match.params.id
        props.getPostCategorias(id)
        
    }, [])
   

    function handleChange(selectedOption) {
        setCategorias(selectedOption.map(so => so.value))

    }
    
    /*function handleChange(event) {
        setCategorias([...categorias, event.target.value])
        console.log("soy categorias",categorias)
    }*/

    function handleSubmit(event) {
        event.preventDefault()
        props.arregloDeCategorias(props.postCategorias.id, categorias)
        .then(()=>{
            //alert("Categorias asociados con éxito")
            
        })
    }

    return (
        <div >
            {!props.postCategorias ? <p>Cargando...</p> :
                <>
                    <div className="contenido">
                        <p>TITULO : {props.postCategorias.title}</p>
                        <p>CONTENIDO : {props.postCategorias.body}</p>
                        {!props.postCategorias.categoria ? <p>Sin categorias</p> :
                            props.postCategorias.categoria.map(elem => {
                                return <div key={elem.id}>** {elem.name} **</div>
                            })}
                    </div></>}
            <Select
                isMulti
                classNamePrefix="select"
                isClearable={true}
                isDisabled={false}
                defaultValue={options[0]}
                options={options}
                onChange={handleChange}
            >
            </Select>
            {/*ve ejemplo de select común */}
            {/*<select multiple={true} value={[props.categorias.id]} onChange={handleChange}>
             {props.categorias.map(categoria =>{
                 return <option value={categoria.id}>{categoria.name}</option>
             })}
            </select>*/}
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export function mapStateToProps(state) {
    return {
        postCategorias: state.postCategorias,
        categorias: state.categorias,
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        getPostCategorias: (id) => dispatch(getPostCategorias(id)),
        arregloDeCategorias: (id, cates) => dispatch(arregloDeCategorias(id,cates))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DetallePost)