import React from 'react';
import MaterialIcon from 'material-icons-react';
import'./styles/tables.css';


class Tables extends React.Component {
    state = {
        description: '',
        price: ''
        }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
          });                 
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('Form was submitted');
        console.log(this.state);
    }
    
    handleClick  = event => {
        event.preventDefault();
        console.log('Form was submitted');
        console.log(this.state);
    }

    addItems = (event) => {
        event.target.name= event.target.value
        console.log('hola');

        
        
          
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
                                            <th scope="col">Precio</th>
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
                                        <input 
                                            className="form-control mb-2 mr-sm-2" 
                                            name="description"
                                            type="text" 
                                            id="description" 
                                            placeholder="Descripción"
                                            onChange={this.handleChange} 
                                            value={this.state.description}
                                        />
                                    </div>
                                    <div className="col-lg-5 col-md-12">
                                        <input 
                                            name="price"
                                            type="number" 
                                            min="0" 
                                            className="form-control mb-2 mr-sm-2" 
                                            id="price" 
                                            placeholder="Precio"
                                            onChange={this.handleChange} 
                                            value={this.state.price}
                                        />
                                    </div>                                 
                                    <div className="col-lg-2 col-md-12">
                                        <button 
                                            className="btn mb-2" 
                                            onClick={this.addItems}>                                        
                                            <MaterialIcon icon="add" className="material-icons" ></MaterialIcon>
                                        </button>
                                    </div>                                    
                                </div>
                                <div className="form-group row">
                                    <div className="col-lg-12">
                                        <button 
                                            // type="submit" 
                                            className="btn btn-salary" 
                                            onClick={this.handleClick}>
                                            Guardar
                                        </button>
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