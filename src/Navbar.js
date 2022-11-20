import logo from "./assets/icons/Vector.svg"
import {Link} from "react-router-dom"
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo-navbar">
                <img src={logo} alt=""/>
            </div>
            <input type="checkbox" id="nav-links"></input>
            <div className="links-navbar">
                <Link to="/home"><p>Home</p></Link>
                <Link to="/home/placetostay"><p>Place to Stay</p></Link>
                <Link><p>NFTs</p></Link>
                <Link><p>Community</p></Link>
            </div>
            <div className="navbar-buttons">
                <button>Connect Wallet</button>
                <label for="nav-links" className="menu-button-container">
                    <div className="hamburger"></div>
                </label>
                
            </div>
            

        </div>
     );
}
 
export default Navbar;