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
            <a href="#" className="navLink">Products</a>
            <a href="#" className="navLink">About Us</a>
            <a href="#" className="navLink">Contact</a>
        </div>
        <CartWidget />
    </nav>
    )
}

export default NavBar;