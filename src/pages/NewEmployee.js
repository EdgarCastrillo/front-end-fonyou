import React, { Component } from 'react'
import employeeService from '../services/employeService';

export default class NewEmployee extends Component {

  state = {
    name: '',
    surname: '',
    workArea: '',
    email: '',
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
      console.log('editar');
      const name = this.state.name;
      const surname = this.state.surname;
      const workArea = this.state.workArea;
      const email = this.state.email;
      let newEmployee = {name,surname,workArea,email}
      await employeeService.createEmployee(newEmployee);
      this.props.history.push('/');
    }


  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const {name,surname,workArea,email}=this.state;

    return (
      <div className='container-dashboard'>
        <section className='content-section'>
          <div className='title-page'>
            <h1>Create Employee</h1>
          </div>
          <div className='container-form'>
            <form className="form-content" onSubmit={this.handleFormSubmit}>
              <input 
                id='name' 
                type='text' 
                name='name' 
                value={name} 
                placeholder='name'
                onChange={this.handleChange}
              />
              <input 
                id='surname' 
                type='text' 
                name='surname' 
                value={surname} 
                placeholder='surname'
                onChange={this.handleChange}
              />
              <div className='select'>
                <select id='workArea' name='workArea' onChange={this.handleChange}>
                  <option value='workArea'>-- your work area --</option>
                  <option value='administration'>Administration</option>
                  <option value='backend'>Backend</option>
                  <option value='frontend'>Frontend</option>
                  <option value='management'>Management</option>
                  <option value='marketing'>Marketing</option>
                </select>
                <div className="select_arrow"></div>
              </div>
              <input 
                id='email' 
                type='text' 
                name='email' 
                value={email} 
                placeholder='email'
                onChange={this.handleChange}
              />
              <button 
              className='btn-primary' 
              type='submit' 
              disabled={ !name || !surname || !workArea || !email }
              >Crear Usuario</button>
            </form>
          </div>
        </section>
      </div>
    )
  }
}
