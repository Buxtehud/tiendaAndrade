import './NavBar.css'
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg"
import CartWidget from "../CartWidget/CartWidget";
import SearchBar from "../SearchBar/SearchBar";

function NavBar(){
    return (
    <nav className="flex flex-col w-screen bg-shopPrimary">
        <div className = "flex flex-row">
            <div className='basis grow flex items-center justify-center'>
                <SearchBar />
            </div>
            <div className="basis flex items-center justify-center">
                <NavLink to= '/'><img src={logo} alt="logo"></img></NavLink>
            </div>
            <div className='basis flex items-center justify-center'>
                <NavLink to ='/cart'><CartWidget /></NavLink>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center text-shopBlue space-x-10 my-5">
            <NavLink className="navLink" to= '/'><p>Home</p></NavLink>
            <NavLink className="navLink" to = 'category/Tortas'><p>Tortas</p></NavLink>
            <NavLink className="navLink" to = 'category/Bocaditos'><p>Bocaditos</p></NavLink>
            <NavLink className="navLink" to = 'category/Dulces'><p>Dulces</p></NavLink>
        </div>
    </nav>
    )
}

export default NavBar;