import"./NavBar.css"
import { NavLink, Link } from "react-router-dom"
import CardWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                CiberFox
            </Link>
            <div className="Categories">
                <NavLink to= {"/category/consola"}>Consolas</NavLink>
                <NavLink to= {"/category/videojuego"}>videojuegos</NavLink>
                <NavLink to= {"/category/accesorio"}>Accesorios</NavLink>
            </div>
            <CardWidget/>
        </nav>
    )
}
export default NavBar