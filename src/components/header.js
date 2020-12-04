import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { changePage } from '../redux/actions/index'
import { FaBars } from "react-icons/fa";

import '../styles/header.scss';


export default function Header() {

    const dispatch = useDispatch();

    const responsive = () => {
        var x = document.getElementById("horizontal");
        if (x.className === "horizontal") {
            x.className += " responsive";
        } else {
            x.className = "horizontal";
        }
    }

    return (
        <div className="horizontal" id="horizontal">
            <li><NavLink className="navlink home" to="/" >Inicio</NavLink></li>
            <li><NavLink className="navlink" to="/carro" onClick={() => dispatch(changePage("Carro"))}>Carro</NavLink></li>
            <li><NavLink className="navlink" to="/avion" onClick={() => dispatch(changePage("Avión"))}>Avión</NavLink></li>
            <li><NavLink className="navlink" to="/barco" onClick={() => dispatch(changePage("Barco"))}>Barco</NavLink></li>
            <li >
                <a className="icon" onClick={responsive}>
                    <FaBars />
                </a>
            </li>
        </div>
    );
}
