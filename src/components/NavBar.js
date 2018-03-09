import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const loggedIn = JSON.parse(localStorage.getItem('user'));

    return (
      <div className="nav-bar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories/1">Vehicles</Link></li>
          <li><Link to="/categories/2">Appliances</Link></li>
          <li><Link to="/categories/3">Computers</Link></li>
          <li><Link to="/categories/4">Furniture</Link></li>
          
          {
            loggedIn ? <li><Link to="/new-item">Add New Listing</Link></li> 
                :null           
          }
          {
            loggedIn ? <li><Link to="/settings">Settings</Link></li> 
          :null           
          }
          {
            loggedIn ? <li><Link to={`/users/${loggedIn.id}`}>My Listings</Link></li>:null           
          }
        </ul>
      </div>
    )
  }
export default Nav