import React from "react";
import {Link} from 'react-router-dom'
import './Menu.css'
function Menu(props){
    return(
        <div className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/jogo">Jogo</Link>
                    </li>
                    <li>
                        <Link to="/param/123">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/param/legal">Param #02</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/404">Não Existe</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;