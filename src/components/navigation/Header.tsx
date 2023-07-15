import { NavLink } from "react-router-dom";
import logo from "@/assets/svg/logo.svg";

export const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><img alt="logo" src={logo} /></li>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    );
}