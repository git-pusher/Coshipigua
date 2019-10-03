import React from 'react';
// import MaterialIcon from 'material-icons-react';
import'./styles/salary.css';


class Salary extends React.Component {
    // state = {
    //     salary: '',
    //     utility: ''
    // }

    // handleChange = event => {
    //     this.setState({
    //         [event.target.name]: event.target.value,
    //       }); 
    // }

    handleClick = event => {
        event.preventDefault();
        console.log('Button was clicked');
        console.log(this.state);
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log('Form was submitted');
        console.log(this.state);
    }       

    

    render(){
        return (
            <div className="container month">
                <form className="salaryMonth" onSubmit={this.handleSubmit}>
                    <h6 className="">Introduce los siguientes valores de acuerdo a tu criterio:</h6>
                    <hr className="divider"/>
                    <div className="form-group row">
                        <label 
                            className="col-lg-7  col-form-label">
                                ¿Cuál es tu sueldo mensual?
                        </label>
                        <div className="col-lg-4">
                            <input
                                name="salary"
                                type="number" 
                                min="0" 
                                className="form-control" 
                                id="salary" 
                                placeholder="Sueldo mensual"
                                onChange={this.props.onChange} 
                                value={this.props.formValues.salary}
                            />
                        </div>
                    </div>                    
                    <div className="form-group row">
                        <label
                            className="col-lg-7 col-form-label">
                                ¿Cuál será tu porcentaje de utilidad?
                        </label>
                        <div className="col-lg-4 col-sm-12">
                            <input 
                                name="utility"
                                type="number" 
                                min="0" className="form-control mb-2 mr-sm-2" 
                                id="utility" 
                                placeholder="Utilidad"
                                onChange={this.props.onChange} 
                                value={this.props.formValues.utility}
                            />
                        </div>
                    </div>
                    {/* <div className="form-group row">
                        <div className="col-lg-12">
                            <button 
                                className="btn btn-salary"
                                onClick={this.handleClick}>
                                // {/* type="submit"  
                                Guardar
                            </button>
                        </div>
                    </div> */}
                </form>
            </div>
        );
    }
}

export default Salary;