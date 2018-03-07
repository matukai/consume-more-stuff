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
          {/* <li><Link to={`/categories/${id}`}>{category.name}</Link></li> */}

          <li><Link to="/categories/1">Vehicles</Link></li>
          <li><Link to="/appliances">Appliances</Link></li>
          <li><Link to="/computers">Computers</Link></li>
          <li><Link to="/furniture">Furniture</Link></li>
        </div>
      </ul>
    </div>
  )
}
export default Nav

// import React from 'react';
// import { Link } from 'react-router-dom';

// const PlanetsList = props => {
//   return(
//   <div className="planets-list">
//     {
//       props.planets.map(planet => {
//         const planetId = planet.url.split('/').slice(-2, -1).pop(); //jesse's way, don't sweat it!
//         return(
//           <div key={planetId} className="planet-link">
//             <Link to={`/planets/${planetId}`}>{planet.name}</Link>
//           </div>
//         );
//       })
//     }
//   </div>
// )};

// export default PlanetsList