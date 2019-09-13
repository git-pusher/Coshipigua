import React from 'react';
import MaterialIcon from 'material-icons-react';
import'./styles/tables.css';


class Tables extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            // description: '',
            // quantity: ''
        }
    }

    handleChange = event => {
        
        console.log({
            description: event.target.description,
            value: event.target.value});        
    }
    
    handleClick  = event => {
        console.log("click");
        
    }

    validateInputs = () => {
        var description = description.value;

        if(description){
            description.addClass('is-invalid')
        }
        
        //verifica que no sea nulo o vacío
        // if( description.value() && quantity.value() )// add()
      }



    add = (e) => {
        // e.preventDefault();
        console.log('guardando');
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <div className="card my-5 bg-light text-center sueldo">
                            <div className="card-header">
                                <h1>{this.props.title}</h1>
                            </div>
                            <div className="card-body">
                                <table className="table table-hover"> 
                                    <thead>
                                        <tr>
                                            <th scope="col">Descripción</th>
                                            <th scope="col">Cantidad</th>
                                        <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer">
                                <div className="row mb-2">
                                    <div className="col-lg-5 col-md-12" >
                                        <input type="text" 
                                               className="form-control mb-2 mr-sm-2" 
                                               id="description" 
                                               onChange={this.handleChange} 
                                               placeholder="Descripción"
                                            />
                                    </div>
                                    <div className="col-lg-5 col-md-12">
                                        <input type="number" 
                                               min="0" 
                                               className="form-control mb-2 mr-sm-2" 
                                               id="quantity" 
                                               onChange={this.handleChange} 
                                               placeholder="Cantidad"
                                            />
                                    </div>                                 
                                    <div className="col-lg-2 col-md-12">
                                        <button type="submit" className="btn mb-2" >                                        
                                            <MaterialIcon icon="add" className="material-icons" ></MaterialIcon>
                                        </button>
                                    </div>                                    
                                </div>
                                <div className="form-group row">
                                    <div className="col-lg-12">
                                        <button type="submit" 
                                                className="btn btn-salary" 
                                                onClick={this.handleClick}>Guardar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        
        );
    }
}

export default Tables;