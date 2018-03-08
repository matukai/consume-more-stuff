import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const loggedIn = JSON.parse(localStorage.getItem('user'));

    return (
      <div className="nav-bar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/vehicles">Vehicles</Link></li>
          <li><Link to="/appliances">Appliances</Link></li>
          <li><Link to="/computers">Computers</Link></li>
          <li><Link to="/furniture">Furniture</Link></li>
          
          {
            loggedIn ? <li><Link to="/new-item">Add New Listing</Link></li> 
                :null           
          }
          {
            loggedIn ? <li><Link to="/settings">Settings</Link></li> 
          :null           
          }
          {
            loggedIn ? <li><Link to={`users/${loggedIn.id}`}>My Listings</Link></li>:null           
          }
        </ul>
      </div>
    )
  }
export default Nav