import React from 'react';

import './styles/totals.css'

class Totals extends React.Component {

    render () {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        {/* <h5>{this.props.title}</h5> */}
                        <h5>RESUMEN</h5>
                    </div>
                    <div className="card-body">
                           
                    </div>
                    <div className="card-footer">                                
                        <div className="form-group row">
                            <div className="col-lg-12">
                                <button 
                                    // type="submit" 
                                    className="btn btn-salary" 
                                    >
                                    Guardar costo
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Totals;