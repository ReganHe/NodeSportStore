import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <nav className='main-nav' role='navigation'>
        <ul className='nav navbar-nav'>
          <li><Link to="list">All Products</Link></li>
        </ul>
      </nav>
    );
  }
});
