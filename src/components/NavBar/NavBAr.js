import { Link, NavLink} from "react-router-dom"
import CardWidget from "../CartWidget/CartWidget" 
const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to ='/'>
            </Link>
            <div className="Categories">
                <NavLink to= {'/category/Nintendo'} className={({isActive})=> isActive ? "ActiveOption": "Option"}>Nintendo</NavLink>
                <NavLink to= {'/category/PlayStation'} className={({isActive})=> isActive ? "ActiveOption": "Option"}>Play Station</NavLink>
                <NavLink to= {'/category/Xbox'} className={({isActive})=> isActive ? "ActiveOption": "Option"}>Xbox</NavLink>
            </div>
            <CardWidget/>
        </nav>
    )
}
export default NavBar