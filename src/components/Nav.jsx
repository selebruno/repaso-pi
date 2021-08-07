import { NavLink } from 'react-router-dom'
import './Nav.css'
export default function Nav(){
    return(
        <div className="nav">
            <NavLink exact to ='/' className="enlace">
                <h3>Home</h3>
            </NavLink>
            <NavLink exact to ='/posts' className="enlace">
                <h3>Posts</h3>
            </NavLink>
            <NavLink exact to ='/crear/categoria' className="enlace">
                <h3>Crear Categoría</h3>
            </NavLink>
        </div>
    )
}