/* 
CJ notes: 
- divs are in place of <Link to="/" /> for testing purposes    
- pass in a prop that shows if auth = true || false, then show xyz
*/


import React from 'react';
import { Link, Route } from 'react-router-dom';

import RegisterUser from '../containers/RegisterUser';

const Header = () => {

  return (
    <div className="header-bar">
      <div className="logo">LOGO</div>

      {/* UnAuth */}
      <div className="unauth-header-view"> SEARCH BAR...
        <button><Link to="/login">Login</Link></button>
        <button><Link to="/register">Register</Link></button>
      </div>

    {/* Auth View */}
      <div className="auth-header-view">Hello, USERNAME!
        {/* <div className="welcome-auth-user">Hello, { username }!</div> */}
        <button><Link to="/logout">Logout</Link></button>
      </div>
    </div>
  )
}

export default Header