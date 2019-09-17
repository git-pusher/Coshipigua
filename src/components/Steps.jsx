import React from 'react';
import Details from './Details'
import Tables from './Tables';
import Salary from './Salary';


class Steps extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return(
        <div className="container">
            <h1>ALGO</h1>
            <p>
                <a className="btn btn-outline-warning" 
                   data-toggle="collapse" 
                   href="#stepOne"  
                   role="button"
                   aria-expanded="false" 
                   aria-controls="collapseExample">
                    Paso 1.
                </a>
                <a className="btn btn-outline-warning" 
                   data-toggle="collapse" 
                   href="#stepTwo" 
                   role="button" 
                   aria-expanded="false" 
                   aria-controls="stepTwo">
                    Paso 2.
                </a>
                <a className="btn btn-outline-warning" 
                   data-toggle="collapse" 
                   href="#stepThree" 
                   role="button" 
                   aria-expanded="false" 
                   aria-controls="stepThree">
                    Paso 3.
                </a>
                <a className="btn btn-outline-warning" 
                   data-toggle="collapse" 
                   href="#stepFour" 
                   role="button" 
                   aria-expanded="false" 
                   aria-controls="stepFour">
                    Paso 4.
                </a>
                <a className="btn btn-outline-warning" 
                   data-toggle="collapse" 
                   href="#stepFive" 
                   role="button" 
                   aria-expanded="false" 
                   aria-controls="stepFive">
                    Paso 5.
                </a>
                <a className="btn btn-outline-warning" 
                   data-toggle="collapse" 
                   href="#stepSix" 
                   role="button" 
                   aria-expanded="false" 
                   aria-controls="stepSix">
                    Paso 6.
                </a>
                <a className="btn btn-outline-warning" 
                   data-toggle="collapse" 
                   href="#stepSeven" 
                   role="button" 
                   aria-expanded="false" 
                   aria-controls="stepSeven">
                   Paso 7.
                </a>
            </p>
            <div className="collapse" id="stepOne">
                <div className="container">
                    <Salary />
                </div>
            </div>
            <div className="collapse" id="stepTwo">
                <div className="container">
                    <Details />
                </div>
            </div>
            <div className="collapse" id="stepThree">
                <div className="container">
                    <Tables 
                    title="MATERIA PRIMA"/>
                </div>
            </div>
            <div className="collapse" id="stepFour">
                <div className="container">
                    <Tables 
                    title="MANO DE OBRA"/>
                </div>
            </div>
            <div className="collapse" id="stepFive">
                <div className="container">
                    <Tables 
                    title="GASTOS FIJOS"/>
                </div>
            </div>
            <div className="collapse" id="stepSix">
                <div className="container">
                    <Tables 
                    title="SUELDOS ADMINISTRATIVOS"/>
                </div>
            </div>
            <div className="collapse" id="stepSeven">
                <div className="container">
                    <Tables 
                    title="EXTRAS"/>
                </div>
            </div>
        </div>

        )

    }
}

export default Steps;