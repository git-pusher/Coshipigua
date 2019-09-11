import React from 'react';



class Calculadora extends React.Component {
    constructor(props) {
		super(props);
		this.state = {}
    }
    
    render () {
        return (
            <div className="container">
                <div className="wellcome">
                    <h1 className="text-uppercase">Calculadora de costos</h1>
                    <hr/>
                    <p className=" text-justify">Hola, ahora que ya conoces todo el desgloce de tus gastos para la elaboración de tu producto, vamos a introducir cada uno para realizar el cálculo. Ya debes tener conocimiento de la clasificación de cada gasto para que el resultado sea correcto.</p>
                    <p className="text-uppercase">¡Empecemos!</p>
                    <hr/>
                </div>
                <div>
                    
                </div>
            </div>
        );
    }
}

export default Calculadora;