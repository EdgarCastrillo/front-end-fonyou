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
    console.log(employee)
    console.log(this.state.id)
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
        <h1>Search employee</h1>
        <form onSubmit={this.handleSubmit}>
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
            >Buscar</button>
        </form>
        {employee ? <CardEmployee
        key={`key-${employee.id}`}
      employee={employee}
      history={this.props.history}
      /> : ''}
      </div>
    )
  }
}
