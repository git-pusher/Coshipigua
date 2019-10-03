import React from 'react';
import Details from './Details';
import Salary from './Salary';
import Steps from './Steps';
import Tables from './Tables';
import Totals from './Totals';

import './styles/calculadora.css';

class Calculadora extends React.Component {
    state = { 
        form: {
            salary: '',
            utility: '',
            nameProduct: '',
            hours: '',
            date: ''
        } 
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
    
    render () {
        return (
            <div className="container-fluid">
                <div className="wellcome">
                    <h1 className="text-uppercase  col mt-md-4 mt-sm-4">Calculadora</h1>              
                    <hr className="divider mt-4 mb-4"/>
                </div>
                <div className="clearfix col col-lg-12 col-sm-12" id="greeting">
                    <div className="text">
                        <p>Hola, ahora que ya conoces todo el desgloce de tus gastos para la elaboración de tu producto, vamos a introducir cada uno para realizar el cálculo.</p>
                        <p>Ya debes tener conocimiento de la clasificación de cada gasto para que el resultado sea correcto.</p>
                        <p>¿Estás listo?</p>
                    </div>
                    <span className="calculator d-none d-md-block" id="animation-rotate"></span>
                </div>
                <hr className="divider"/>
                <div className="container">
                    <div className="row">
                        <Steps />
                    </div>
                    <div className="row">
                        <div className="col col-lg-6">                                                            <div className="collapse" id="stepOne">
                            <div className="container">
                                <Salary 
                                    onChange={this.handleChange}
                                    formValues={this.state.form}
                                />
                            </div>
                        </div>
                        <div className="collapse" id="stepTwo">
                            <div className="container">
                                <Details 
                                    onChange={this.handleChange}
                                    formValues={this.state.form}
                                />
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
                <div className="col-lg-6">                            
                    <div className="col">
                        <Totals 
                            salary = {this.state.form.salary}
                            utility = {this.state.form.utility}
                            nameProduct = {this.state.form.nameProduct}
                            hours = {this.state.form.hours}
                            date = {this.state.form.date}
                        />
                    </div>
                </div> 
            </div>
        </div>                             
    </div>
             
               
        );
    }
}

export default Calculadora;