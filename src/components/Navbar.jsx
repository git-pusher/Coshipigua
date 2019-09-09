import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.jpg'

class Navbar extends Component {
    constructor(props){
        super(props);
		this.state = {}
    }
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <NavLink className="navbar-brand" to="/">
                            <img src={logo} alt="logo coshipigua" height="40px"/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <NavLink className="navbar-brand" to="#">Coshipigua</NavLink>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="#">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Link</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
                        </li>
                    </ul>                
                </div>
            </nav>
        );
    }
    
}
export default Navbar;