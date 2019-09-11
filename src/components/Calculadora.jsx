import React from 'react';
import Tables from './Tables';
import './styles/calculadora.css';


class Calculadora extends React.Component {
    constructor(props) {
		super(props);
		this.state = {}
    }
    
    render () {
        return (
            <div className="container">
                <div className="wellcome">
                    <h1 className="text-uppercase">Calculadora</h1>
                    <hr/>
                    <p className="text-justify">Hola, ahora que ya conoces todo el desgloce de tus gastos para la elaboración de tu producto, vamos a introducir cada uno para realizar el cálculo. Ya debes tener conocimiento de la clasificación de cada gasto para que el resultado sea correcto.</p>
                    <p className="text-justify">Antes de empezar a rellenar todas las tablas, necesitamos definir cuántos días trabajas a la semana, cuál es tu sueldo mensual y cuál será el porcentaje de utilidad que obtendrás</p>
                    <hr/>
                </div>
                <div className="calculadora">
                    <Tables />
                </div>
            </div>
        );
    }
}

export default Calculadora;