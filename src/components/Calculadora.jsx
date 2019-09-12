import React from 'react';
import Salary from './Salary';
import Tables from './Tables';
import Steps from './Steps';

import './styles/calculadora.css';

class Calculadora extends React.Component {
    constructor(props) {
		super(props);
		this.state = {}
    }


    
    render () {
        return (
            <div className="container-fluid">
                <div className="wellcome">
                    <h1 className="text-uppercase display-1">Calculadora</h1>              
                    <hr className="divider"/>
                </div>
                <div id="collaborate" class="clearfix">
                    <div class="text">
                        <p>Hola, ahora que ya conoces todo el desgloce de tus gastos para la elaboración de tu producto, vamos a introducir cada uno para realizar el cálculo.</p>
                        <p>Ya debes tener conocimiento de la clasificación de cada gasto para que el resultado sea correcto.</p>
                        <p>¿Estás listo?</p>
                    </div>
                        <span class="cartoon"></span>
                        {/* <a href="/contact" class="contact">Contact us</a> */}
                </div>
                <hr className="divider"/>
                <div className="calculadora">
                    <Steps />
                    {/* <Salary />
                    <Tables /> */}
                </div>
            </div>
        );
    }
}

export default Calculadora;