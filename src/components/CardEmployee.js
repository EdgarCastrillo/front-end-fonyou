import React, { Component } from 'react';
import employeeService from '../services/employeService';

export default class CardEmployee extends Component {
  state = {
    name:'',
    surname:'',
    email:'',
    workArea:'',
    isEdit:false
  }

  componentDidMount() {
    this.setState({
      name: this.props.employee.name,
      surname: this.props.employee.surname,
      email: this.props.employee.email,
      workArea: this.props.employee.workArea
    })
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    if(this.state.isEdit) {
      console.log('editar');
      const name = this.state.name;
      const surname = this.state.surname;
      const workArea = this.state.workArea;
      const email = this.state.email;
      let updateEmployee = {name,surname,workArea,email}
      let newEmployee = await employeeService.updateEmployee(this.props.employee.id,updateEmployee);
    this.setState({
      name: newEmployee.data.name,
      surname: newEmployee.data.surname,
      email: newEmployee.data.email,
      workArea: newEmployee.data.workArea,
      isEdit: false
    })
    }else{
      this.setState({
        isEdit: true
      })
    }

  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  
  handleDelete = async ()  =>{
    await employeeService.deleteEmployee(this.props.employee.id);
    this.props.history.push('/');
  } 

  render() {
    const {name, surname, email, workArea, isEdit} = this.state;
  
      return(
        <div>

          <form onSubmit={this.handleFormSubmit}>
            {isEdit ? <input 
              id='name' 
              type='text' 
              name='name' 
              value={name} 
              placeholder='name'
              onChange={this.handleChange}
            /> : <h3>{name}</h3>}
            {isEdit ? <input 
              id='surname' 
              type='text' 
              name='surname' 
              value={surname} 
              placeholder='surname'
              onChange={this.handleChange}
            /> : <h3>{surname}</h3>}
            {isEdit ? <div className='select'>
              <select id='workArea' name='workArea' onChange={this.handleChange}>
                <option value='workArea'>-- your work area --</option>
                <option value='administration'>Administration</option>
                <option value='backend'>Backend</option>
                <option value='frontend'>Frontend</option>
                <option value='management'>Management</option>
                <option value='marketing'>Marketing</option>
              </select>
              <div className="select_arrow"></div>
            </div> : <h3>{workArea}</h3>}
            {isEdit ? <input 
              id='email' 
              type='text' 
              name='email' 
              value={email} 
              placeholder='email'
              onChange={this.handleChange}
            /> : <h3>{email}</h3>}
            <button 
              className='btn-primary' 
              type='submit' 
              disabled={ !name || !surname || !workArea || !email }
              >{isEdit ? 'Aceptar' : 'Editar'}</button>
                </form>
                <button 
              className='btn-secundary' 
              type='submit' 
              onClick={()=>this.handleDelete()}
              >Borrar</button>
        </div>
      )
  }
}

