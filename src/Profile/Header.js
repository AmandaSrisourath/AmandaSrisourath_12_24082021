import React from "react";
import logo from "../Assets/Logos/logo.png";

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <img id="logo" src={logo} alt="logo"/>
                <ul>
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