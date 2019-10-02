import React from 'react';
import './styles/details.css'

class Details extends React.Component {
  state = {
    nameProduct: '',
    hours: '',
    date: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = event => {
    event.preventDefault();
        console.log('Form was submitted');
        console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div className="container details">
        <h6>Introduce los siguientes datos</h6>
        <hr className="divider"/>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label 
              className="col-lg-6 col-form-label">
              Nombre del producto:
            </label>
            <input
                className="form-control col-lg-4 col-sm-12"
                name="nameProduct"
                type="text"
                id="nameProduct"
                placeholder="Nombre del producto"
                onChange={this.handleChange}
                value={this.state.nameProduct}
              />            
          </div>

          <div className="form-group row">
            <label
              className="col-lg-6 col-form-label">
              Horas trabajadas
            </label>
            <input
              className="form-control col-lg-4 col-sm-12"
              name="hours"
              type="number"
              min="0"
              id="hours"
              placeholder="Horas invertidas en el producto"
              onChange={this.handleChange}
              value={this.state.hours}
            />
          </div>
          
          <div className="form-group row">
            <label
              className="col-lg-6 col-form-label">
              Fecha de término:
            </label>
            <input
              className="form-control col-lg-4 col-sm-12"
              type="date"
              name="date"
              id="date"
              onChange={this.handleChange}
              value={this.state.date}
            />
          </div>          

          <button 
            className="btn btn-salary"
            onClick={this.handleClick}> 
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default Details;