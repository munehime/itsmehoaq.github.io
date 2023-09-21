import { Link, useLocation } from "react-router-dom";

import "./style/Navbar.css"
function Home() {
    return (useLocation().pathname === "/" ?
        <Link to="/" className="NavbarButton" onClick={ (event) =>event.preventDefault()}>Home</Link> :
        <Link to="/" className="NavbarButton">Home</Link>
    );
}
function Skins() {
    return (useLocation().pathname === "/skins" ? 
        <Link to="/skins" className="NavbarButton" onClick={ (event) =>event.preventDefault()}>Skins</Link> :
        <Link to="/skins" className="NavbarButton">Skins</Link>
    );
}
function Navbar() {
    return (
        <div className="Navbar">
            <div className="NavbarContainer">
                <div className="NavbarBadge">
                    Hoaq Skins Database
                </div>
                <Home />
                <Skins />
            </div>
        </div>
    )
}

export default Navbar;