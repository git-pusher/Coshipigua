import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import pig from '../img/marranito.png';

import './styles/hero.css';


class Hero extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.location);
        return (
            <div className="container-fluid" id="hero">
                <div className="row pigRow" >
                    <div className="col-lg-7 d-none d-md-block pigRow">
                        <img className="pig d-block" src={pig}  alt="pig"/>                                     
                    </div>
                    <div className="col-lg-5">                                              
                        <div className="col-lg-12 col-md-12">
                            <h1 className="value">¿Cuánto <br/> vale tu <br/> trabajo?</h1>
                            <Link to="/Calculadora-de-costos" className="btn btn-" >Calculadora</Link>
                        </div>
                    </div>                      
                </div>
                
            </div>
            
        );			
    }
}

export default Hero;