import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {  
    return (
      <nav className='top-nav-container'>
          <div className='logo'>
            <img src='/img/logo-fonyou-black.svg' className='logo-nav' alt='Logo FonYou'></img>
          </div>
          <div className='nav-content'>
            <Link to="/" href=''>Home</Link>
          </div>
        </nav>
    )
  }
}

export default Navbar;