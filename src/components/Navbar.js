import { Link, useLocation } from "react-router-dom";
import twitter from "../dep/img/twitter.png"
import twitch from "../dep/img/twitch.png"
import osu from "../dep/img/osu.png"
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
                    206(Skin)DB
                </div>
                <Home />
                <Skins />
            </div>
            {/*<div className="NavbarContainer">*/}
            {/*    <a href="https://twitter.com/itsmehoaq">*/}
            {/*        <img src={twitter} className="NavbarIcon" alt="Twitter"/>*/}
            {/*    </a>*/}
            {/*    <a href="https://www.twitch.tv/itsmehoaq">*/}
            {/*        <img src={twitch} className="NavbarIcon" alt="Twitch" />*/}
            {/*    </a>*/}
            {/*    <a href="https://osu.ppy.sh/users/7696512">*/}
            {/*        <img src={osu} className="NavbarIcon" alt="osu" />*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
    )
}

export default Navbar;