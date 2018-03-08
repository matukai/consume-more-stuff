import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  
  return (
    <div className="nav-bar">
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* Auth view */}
        <div className="auth-nav-bar-view">
          {/* <li><Link to="/messages">Messages</Link></li> */}
          <li><Link to="/settings">Settings</Link></li>
        </div>
        {/* UnAuth view */}
        <div className="unauth-nav-bar-view"> 
          <li><Link to="/categories/1">Vehicles</Link></li>
          <li><Link to="/categories/2">Appliances</Link></li>
          <li><Link to="/categories/3">Computers</Link></li>
          <li><Link to="/categories/4">Furniture</Link></li>
        </div>
      </ul>
    </div>
  )
}
export default Nav