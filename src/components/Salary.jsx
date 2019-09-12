import React from 'react';
// import MaterialIcon from 'material-icons-react';
import'./styles/salary.css';


class Salary extends React.Component {
    constructor(props) {
		super(props);
        this.salary = React.createRef()
		this.state = {
        }
    }

    


    change = (event) => {
        this.setState({description: event.target.value})
        this.setState({quantity: event.target.value})

        console.log(event.target.value);
        
    }
    
    validateInputs = () => {
        var description = this.state.description;

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
            <div className="container month">
                <form className="salaryMonth">
                    <h6>Introduce los siguientes valores de acuerdo a tu criterio:</h6>
                    <hr className="divider"/>
                    <div className="form-group row">
                        <label htmlFor="inputSalary" className="col-lg-7  col-form-label">¿Cuál es tu sueldo mensual?</label>
                        <div className="col-lg-4">
                            <input type="number" min="0" className="form-control" ref={this.salary} placeholder="Sueldo mensual"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputDays" className="col-lg-7 col-form-label">¿Cuántos días trabajas a la semana?</label>
                        <div className="col-lg-4 col-sm-12">
                            <input type="number" min="0" className="form-control" id="days" placeholder="Días trabajados"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputUtility" className="col-lg-7 col-form-label">¿Cuál será tu porcentaje de utilidad?</label>
                        <div className="col-lg-4 col-sm-12">
                            <input type="number" min="0" className="form-control mb-2 mr-sm-2" id="utility" placeholder="Utilidad"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-lg-12">
                        <button type="submit" className="btn btn-salary">Sign in</button>
                        </div>
                    </div>
                    </form>
                </div>
        );
    }
}

export default Salary;