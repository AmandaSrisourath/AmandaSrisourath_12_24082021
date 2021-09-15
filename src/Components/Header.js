import React from "react";
import logo from "../Assets/Logos/logo.png";

/**
 * Create header
 */

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img className="logo" src={logo} alt="logo"/>
                <ul className="navigation">
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </div>
        )
    }
}

export default Header;