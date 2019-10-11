import React from 'react';
// import MaterialIcon from 'material-icons-react';
import './styles/tables.css';


class WorkForce extends React.Component {   
    constructor() {
        super();
        this.state = { 
            total: 0 
        };        
      }

    
    calculate = (e) =>  {
        e.preventDefault();
        const salary = this.props.salary
        const hours = this.props.hours
        const averageWeek = 4.3
        const days = 40

        const totalSalary = parseFloat((salary * hours /(averageWeek * days )).toFixed(2))

       this.setState ({
            total : totalSalary
       })
        console.log(this.state, totalSalary)
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
                                            <th scope="col">CANTIDAD</th>
                                            <th></th>
                                        </tr>
                                        
                                    </thead>
                                    <tbody className=""> 
                                        <tr>
                                            <th scope="col">Sueldo mensual</th>
                                            <th>$ {this.props.salary}</th>
                                            <th></th>
                                        </tr>   
                                        <tr>
                                            <th scope="col">Horas trabajadas</th>
                                            <th>{this.props.hours}</th>
                                            <th></th>
                                        </tr> 
                                    </tbody>                                 
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Sueldo por hora</th>
                                            <th>$ {this.state.total}</th>                                        
                                            <th></th>
                                        </tr>
                                    </thead>
                                </table>                        
                            </div>
                            <div className="card-footer">
                                                        
                                <div className="form-group row">
                                <div className="col-lg-6 col-md-6">
                                        <button className="btn btn-salary mb-2"
                                         type="submit"
                                        onClick={this.calculate}
                                         >                                                                                 
                                            Calcular                                             
                                        </button>
                                    </div>  
                                    <div className="col-lg-6 col-md-6">
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

export default WorkForce;