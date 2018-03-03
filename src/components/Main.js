/*
CJ notes:
- Authentication required for:
  - new-item
  - edit-item
  - settings
- divs are in place of <Route /> for testing purposes
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Main = (props) => {

  return (
    <main className="page-content">
      <Switch>

        <Route exact path="/" />
        <Route exact path="/register" />
        <Route exact path="/new-item" />
        <Route path="/edit-item" />
        <Route path="/settings" /> 
    
      </Switch>
    </main>
  ) 
}



export default Main