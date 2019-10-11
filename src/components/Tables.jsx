import React from 'react';
import MaterialIcon from 'material-icons-react';
import './styles/tables.css';


class Tables extends React.Component {   
    constructor() {
        super();
        this.state = { 
          items: [], 
          description: '',
          price: '',
          total: 0 
        };        
      }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
          });                 
    }

    handleSubmit= (e) =>  {
        e.preventDefault();
        
        if (!this.state.description.length && !this.state.price.length) {
            return alert('No has ingresado datos.');
        }
        
        const newItem = {
            id: Date.now(),
            description: this.state.description,
            price: parseInt(this.state.price),
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            description: '',
            price: '',
            total: parseFloat(this.state.price) + this.state.total
        })
        );
    }
  
    mostrarDatos = () => {
       
        return ( 
            <>            
                {this.state.items.map(item => (
                    <tr key={item.id}>
                        <th scope="col">{item.description}</th>
                        <th scope="col">$ {item.price}</th>  
                        <th></th>
                    </tr>
                ))}
            </> 
        );    
    }


    handleClick = () => {
        console.log("se hizo click en enviar a resumen")
        this.props.onSubmit(this.state, this.props.id)
        
     }
       
    render(){       

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card mb-2 bg-light text-center sueldo">
                            <div className="card-header">
                                <h5>{this.props.title}</h5>
                            </div>
                            <div className="card-body">
                                <table className="table table-hover"> 
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">DESCRIPCIÓN</th>
                                            <th scope="col">PRECIO</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className="">    
                                        {this.mostrarDatos()}
                                    </tbody>
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Total</th>
                                            <th>$ {this.state.total}</th>                                        
                                            <th></th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="card-footer">
                                <form className="row mb-2" onSubmit={this.handleSubmit}>
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
                                        <button className="btn mb-2">                                                                                 
                                            <MaterialIcon icon="add" className="material-icons" ></MaterialIcon>
                                            #{this.state.items.length + 1}  
                                            
                                        </button>
                                    </div>                                    
                                </form>
                                <div className="form-group row">
                                    <div className="col-lg-12">
                                        <button 
                                            className="btn btn-salary"
                                            onClick={this.handleClick}
                                            value={this.state.total}>
                                            Enviar a resumen
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