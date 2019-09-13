import React from 'react';
import './styles/details.css'

class Details extends React.Component {
  state = {};

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div className="container details">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombre del producto:</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="nameProduct"
              value={this.state.nameProduct}
            />
          </div>

          <div className="form-group">
            <label>Horas trabajadas</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="number"
              min="0"
              name="hours"
              value={this.state.hours}
            />
          </div>
          
          <div className="form-group">
            <label>Fecha de término:</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="date"
              name="date"
              value={this.state.date}
            />
          </div>          

          <button onClick={this.handleClick} className="btn btn-salary">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default Details;