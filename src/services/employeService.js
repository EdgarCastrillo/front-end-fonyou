// import Axios from 'axios'

// export default class employeService {
//   getAllEmployees() {
//     console.log('estoy en el serviceee');
//     let employe = Axios.get('http://localhost:3000/employees')
//   }
// }

import axios from 'axios';

class EmployeeService {
  constructor() {
    this.employee = axios.create({
      baseURL: 'http://localhost:3000/employees',
      withCredentials: true,
    })
  }

  getAllEmployees(){
    return this.employee.get('/');
  }

  updateEmployee(id,employee){
    return this.employee.put(`/${id}`,employee)
  }

  deleteEmployee(id){
    return this.employee.delete(`/${id}`);
  }

  createEmployee(employee){
    return this.employee.post('/',employee)
  }

  searchEmployee(id){
    return this.employee.get(`?id=${id}`);
  }
}

const employeeService = new EmployeeService();

export default employeeService;