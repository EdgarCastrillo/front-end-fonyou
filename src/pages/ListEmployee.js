import React, { Component } from 'react'
import employeeService from '../services/employeService';
import CardEmployee from '../components/CardEmployee';

export default class ListEmployee extends Component {
  
  state = {
    employees: []
  }

  async componentDidMount() {
    try {
      let employees = await employeeService.getAllEmployees();
      this.setState({
        employees: employees.data
      })
    } catch (error) {
      console.log(error);
    }
  }

  renderEmployees() {
    return this.state.employees.map((employee,id)=>{
      return <CardEmployee
      key={`key-${id}`}
        employee={employee}
        history={this.props.history}
        />
    })
  }
  
  render() {
    const {employees} = this.state
    return (
      <div className='container-dashboard'>
        <section className='content-section'>
          <div className='title-page'>
            <h1>List of Employees</h1>
          </div>
          <div className='container-list'>
            {employees ? this.renderEmployees() : <p>Loading...</p>}
          </div>
        </section>
      </div>
    )
  }
}
