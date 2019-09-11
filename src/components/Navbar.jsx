import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png'
import '../App.css'

class Navbar extends Component {
    constructor(props){
        super(props);
		this.state = {}
    }
    render(){
        return (
            <div id="header-nav">
            <div className="container" >
                <nav className="navbar navbar-default navbar-expand-lg navbar-light">
                    <div className="navbar-brand" to="/">
                        <img src={logo} alt="logo coshipigua" height="100px"/>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="nav navbar-nav navbar-collapse collapse" id="navbarTogglerDemo01">                        
                        <ul className="navbar-nav mt-2 mt-lg-0 align-items-center navbar-right">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Como-funciona">Cómo funciona</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Calculadora-de-costos">Calculadora</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Sobre-mi">Contacto</NavLink>
                            </li>
                        </ul>                
                    </div>
                </nav>
            </div>
            </div>
        );
    }
    
}
export default Navbar;