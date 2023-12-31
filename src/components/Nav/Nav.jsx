import React, {useState, useEffect} from "react";
import NetflixLogo from "../../assets/netflix-logo.png";
import Avatar from "../../assets/netflix-avatar.png";
import "./Nav.css"


function Nav() {
const [show, handleShow] = useState(false);
const transitionNavBar = () => {

    if (window.scrollY > 100) {
        handleShow(true);
    } else {
        handleShow(false);
    }
};

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
}, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img className="nav_logo" src={NetflixLogo} alt=" "/>
                <img className="nav_avatar" src={Avatar} alt=" "/>
            </div>
        </div>
    );
}

export default Nav;
