import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import calculadora from '../img/calculadora.PNG';

import '../App.css';


class Hero extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props.location);
        return (
            <div className="container-fluid" id="hero">
                <div className="row" >
                    <div className="col">
                        <div className="col">
                            <img className="d-block w-80" src={calculadora}  alt="Calculadora" height="300px"/>
                        </div>
                        
                        <div className="overlay carousel-caption">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-6 offset-md-6 text-center text-md-right">
                                        <h1 className="text-uppercase">Grace HOPPER</h1>
                                        <h4>Laboratorio de hematología</h4>
                                        <p className="d-none d-md-block carrusel-detalles">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            Ut enim ad minim veniam, quis nos toud duty ullamco laboris nisi ut aliquip ex ea 
                                            commodoregur. Velit esse cillum dolore eu fugiat nulla pariatur. 
                                            Excepteur sint occaecat cupidatat no proidente, sol en la culpa qui officia deserunt 
                                            mollit anim id est laborum </p>                                        
                                        <Link to="/ListaCitas" className="btn btn-lands" >Citas</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="container-fluid debajoCarrusel">
                    <div className="row bc"> <br/> </div>
                </div>
            </div>
            
        );			
    }
}

export default Hero;