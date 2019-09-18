import React, { Component } from 'react'
import employeeService from '../services/employeService';
import CardEmployee from '../components/CardEmployee';

export default class SearchEmployee extends Component {
  state = {
    id:'',
    employee: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const employee = await employeeService.searchEmployee(this.state.id);
    this.setState({
      employee:employee.data[0]
    })
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  render() {
    const {id, employee} = this.state;
    return (
      <div className='container-dashboard'>
        <section className='content-section'>
          <div className='title-page'>
            <h1>Search Employees</h1>
          </div>
          <div className='container-form'>
            <form className="form-content" onSubmit={this.handleSubmit}>
            <input 
              id='id' 
              type='text' 
              name='id' 
              value={id} 
              placeholder='Entry the Employee ID'
              onChange={this.handleChange}
              />
              <button 
              className='btn-primary' 
              type='submit' 
              disabled={ !id }
              >Search</button>
            </form>
            <div className="result">
              {employee ? <CardEmployee
              key={`key-${employee.id}`}
              employee={employee}
              history={this.props.history}
              /> : ''}
            </div>
          </div>
        </section>
      </div>
    )
  }
}
