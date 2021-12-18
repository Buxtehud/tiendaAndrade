import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg"
import CartWidget from "../CartWidget/CartWidget";

function NavBar(){
    return (
    <nav className="navContainer">
        <div className="navLogo">
        <NavLink className="navLink" to= '/'><img src={logo} alt="logo"></img></NavLink>
        </div>
        <div className="navLinkContainer">
            <NavLink className="navLink" to= '/'><p>Home</p></NavLink>
            <NavLink className="navLink" to = 'category/Tortas'><p>Tortas</p></NavLink>
            <NavLink className="navLink" to = 'category/Bocaditos'><p>Bocaditos</p></NavLink>
            <NavLink className="navLink" to = 'category/Dulces'><p>Dulces</p></NavLink>
        </div>
        <NavLink to ='/cart'><CartWidget /></NavLink>
    </nav>
    )
}

export default NavBar;