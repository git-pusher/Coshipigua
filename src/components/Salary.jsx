import React from 'react';
// import MaterialIcon from 'material-icons-react';
import'./styles/salary.css';


class Salary extends React.Component {
    state = {
        salary: '',
        days: '',
        hours: ''
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
    
    

    

    render(){
        return (
            <div className="container month">
                <form className="salaryMonth" onSubmit={this.handleSubmit}>
                    <h6>Introduce los siguientes valores de acuerdo a tu criterio:</h6>
                    <hr className="divider"/>
                    <div className="form-group row">
                        <label htmlFor="inputSalary" 
                               className="col-lg-7  col-form-label">¿Cuál es tu sueldo mensual?
                        </label>
                        <div className="col-lg-4">
                            <input
                                name="salary"
                                type="number" 
                                min="0" 
                                className="form-control" 
                                id="salary" 
                                placeholder="Sueldo mensual"
                                onChange={this.handleChange} 
                                value={this.state.salary}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputDays" 
                               className="col-lg-7 col-form-label">¿Cuántos días trabajas a la semana?
                        </label>
                        <div className="col-lg-4 col-sm-12">
                            <input
                                className="form-control" 
                                name="days" 
                                type="number" 
                                min="0" 
                                id="days" 
                                placeholder="Días trabajados"
                                onChange={this.handleChange} 
                                value={this.state.days}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputUtility" 
                               className="col-lg-7 col-form-label">¿Cuál será tu porcentaje de utilidad?
                        </label>
                        <div className="col-lg-4 col-sm-12">
                            <input 
                                name="utulity"
                                type="number" 
                                min="0" className="form-control mb-2 mr-sm-2" 
                                id="utility" 
                                placeholder="Utilidad"
                                onChange={this.handleChange} 
                                value={this.state.utility}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-lg-12">
                            <button 
                                className="btn btn-salary"
                                onClick={this.handleClick}>
                                {/* type="submit"  */}
                                Guardar
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
        );
    }
}

export default Salary;