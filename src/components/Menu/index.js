import React from 'react';
import { Link } from 'react-router-dom';
import logotipo from '../../assets/img/Logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logotipo} alt="GuiFlix Logotipo" />
            </Link>

            <Link className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Link>
        </nav>
    );
}

export default Menu;