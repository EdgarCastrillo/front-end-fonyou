import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class DashBoard extends Component {
  render () {
    return (
      <div className='container-dashboard'>
        <section className='content-section'>
          <div className='title-page'>
            <h1>Dashboard</h1>
          </div>
          <div className='container-cards'>
            <Link to={'/employee/new'}>
            <div className='cards card-1'>
              <h2>Create Employees</h2>
            </div>
            </Link>
            <Link to={'/employee/'}>
            <div className='cards card-2'>
              <h2>Employees List</h2>
            </div>
            </Link>
            <Link to={'/employee/search'}>
            <div className='cards card-3'>
              <h2>Search Employees</h2>
            </div>
            </Link>
          </div>
        </section>
      </div>
    )
  }
}

export default DashBoard
