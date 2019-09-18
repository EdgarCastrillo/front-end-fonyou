import React, { Component } from 'react'
import employeeService from '../services/employeService';
import CardEmployee from '../components/CardEmployee';

export default class ListEmployee extends Component {
  
  state = {
    employees: []
  }

  async componentDidMount() {
    try {
      console.log('cdm')
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
        <h1>Listado de empleados</h1>
        {employees ? this.renderEmployees() : <p>Cargando...</p>}
      </div>
    )
  }
}
