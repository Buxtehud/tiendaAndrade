import logo from "../assets/logo.jpg"

function NavBar(){
    return (
    <nav className="navContainer">
        <div>
            <img src={logo}></img>
        </div>
        <div className="navLinkContainer">
            <a href="#" className="navLink">Home</a>
            <a href="#" className="navLink">Products</a>
            <a href="#" className="navLink">About Us</a>
            <a href="#" className="navLink">Contact</a>
        </div>
    </nav>
    )
}

export default NavBar;