import { Link } from 'react-router-dom';
import logo from '../assets/svg/logo.svg';

export const Home = () => {
    return (
        <div className="home">
            <img src={logo} className="logo" alt="logo" />

            <ul>
                <li><Link to="/user/10">Eric (Mock)</Link></li>
                <li><Link to="/user/12">Karl (API)</Link></li>
                <li><Link to="/user/18">Cecilia (API)</Link></li>
            </ul>
        </div>
    );
}