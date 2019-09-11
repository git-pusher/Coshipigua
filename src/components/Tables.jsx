import React from 'react';
import MaterialIcon from 'material-icons-react';
import'./styles/tables.css';


class Tables extends React.Component {
    constructor(props) {
		super(props);
		this.state = {}
    }
    
    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <div className="card my-5 bg-light text-center sueldo">
                            <div className="card-header">
                                <h1>SUELDO</h1>
                            </div>
                            <div className="card-body">
                                <table className="table table-hover"> 
                                    <thead>
                                        <tr>
                                            <th scope="col">Descripción</th>
                                            <th scope="col">Monto</th>
                                        <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                    {/* <thead className="thead-light">
                                        <tr>
                                            <th>Totals</th>
                                            <th id="totalCalories">0</th>
                                            <th id="totalCarbs">0</th>
                                            <th id="totalProtein">0</th>
                                            <th></th>
                                        </tr>
                                    </thead> */}
                                </table>
                            </div>
                            <div className="card-footer">
                                <div className="row mb-2">
                                    <div className="col">
                                        <input type="text" className="form-control mb-2 mr-sm-2" id="description" placeholder="Descripción"/>
                                    </div>
                                    <div className="col">
                                        <input type="number" min="0" className="form-control mb-2 mr-sm-2" id="calories" placeholder="Monto"/>
                                    </div>
                                   {/* <div className="col">
                                        <input type="number" min="0" className="form-control mb-2 mr-sm-2" id="carbs" placeholder="Carbs"/>
                                    </div> */}
                                    {/* <div className="col">
                                        <input type="number" min="0" className="form-control mb-2 mr-sm-2" id="protein" placeholder="Protein"/>
                                    </div> */}
                                    <div className="col">
                                        <button className="btn btn-primary mb-2" onclick="validateInputs()">
                                            <MaterialIcon icon="add" className="material-icons"></MaterialIcon>
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