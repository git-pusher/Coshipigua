import React from 'react';

import './styles/totals.css'

class Totals extends React.Component {

    render () {
        return (
            <div className="container">
                <div className="card clearfix" id="holo">
                  <div className="card-header">
                      {/* <h5>{this.props.nameProduct}</h5> */}
                      <h5>RESUMEN</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col col-lg-8 detailsResume mt-4">                      
                        <h5 className="row ml-2">{this.props.nameProduct}</h5>
                        <h5 className="row ml-2">Horas trabajadas: {this.props.hours}</h5>
                        <h5 className="row ml-2">Fecha de término:{this.props.date}</h5>                    
                      </div>
                      <div className="col col-lg-3 salaryResume">
                        <h6 className="row ml-2">Sueldo: ${this.props.salary}</h6>
                        <h6 className="row ml-2">Utilidad: {this.props.utility}%</h6>
                      </div>
                    </div>
                    {/* <div className="salaryResume">
                      <h6 className="row ml-2">Sueldo: ${this.props.salary}</h6>
                      <h6 className="row ml-2">Utilidad: {this.props.utility}%</h6>
                    </div> */}
                    
                    <table className="table table-bordered mt-4">                              
                      <tbody>
                        <tr>
                          <th scope="">Materia prima</th>
                          <th>$ </th>                                  
                        </tr>
                        <tr>
                          <th>Mano de obra</th>
                          <th>$ </th>                                  
                        </tr>
                        <tr>
                          <th>Gastos fijos</th>
                          <th>$ </th>                                  
                        </tr>
                        <tr>
                          <th>Sueldos administrativos</th>
                          <th>$ </th>                                  
                        </tr>
                        <tr>
                          <th>Extras</th>
                          <th>$ </th>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table table-bordered mt-4">
                      <tbody>
                        <tr>
                          <th>Total sin utilidad</th>
                          <th>$ </th>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table table-bordered mt-4">
                      <tbody>
                        <tr>
                          <th>Utilidad</th>
                          <th>$ </th>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table table-bordered mt-4">
                      <tbody>
                        <tr>
                          <th>TOTAL</th>
                          <th>$ </th>
                        </tr>
                      </tbody>
                    </table>
                          {/* <div className="detailsResume mt-4">
                            hdfh
                          </div>
                          <div className="rawMaterialResume mt-3">
                            dhdfh <br/>
                            sdgsd
                          </div>
                          <div className="workforceResume">
                            ghjfgh
                          </div>
                          <div className="fixedCostsResume">
                            dsgdsg
                          </div> 
                          <div className="administrativeSalariesResume">
                            fgfsa
                          </div> 
                          <div className="additionalFeaturesResume">
                            hdfhg
                          </div>  */}
                    </div>
                    <div className="card-footer ">                                
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