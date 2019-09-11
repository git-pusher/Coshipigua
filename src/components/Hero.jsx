import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import marranito from '../img/marranito.png';

import '../App.css';


class Hero extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.location);
        return (
            <div className="container-fluid h-100" id="hero">
                <div className="row h-100 row-hero" >
                    <div className="col-12 col-lg-6 d-none d-md-block">
                        
                            <img className="cocho d-block w-100" src={marranito}  alt="marranito"/>
                                     
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="container">
                            {/* <div className="row align-items-center"> */}
                                <div className="col-lg-12 col-md-6 artesano">
                                    <h1 className="text-uppercase">¿Cuánto vale tu trabajo?</h1>
                                    <Link to="/Calculadora-de-costos" className="btn btn-" >Calculadora</Link>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                      
                </div>
                
            </div>
            
        );			
    }
}

export default Hero;