import logo from "../../assets/logo.jpg"
import CartWidget from "../CartWidget/CartWidget";

function NavBar(){
    return (
    <nav className="navContainer">
        <div className="navLogo">
            <img src={logo} alt="logo"></img>
        </div>
        <div className="navLinkContainer">
            <a href="#" className="navLink">Home</a>
            <a href="#" className="navLink">Tortas</a>
            <a href="#" className="navLink">Bocaditos</a>
            <a href="#" className="navLink">Dulces</a>
        </div>
        <CartWidget />
    </nav>
    )
}

export default NavBar;