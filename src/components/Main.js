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
import Home from '../containers/Home';
import RegisterUser from '../containers/RegisterUser';
import Login from '../containers/Login';
import UserSetttings from '../containers/UserSettings';
import NewItem from '../containers/NewItem';
import EditItem from '../containers/EditItem';

const Main = (props) => {

  return (
    <main className="page-content">

      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={RegisterUser} />
        <Route exact path="/new-item" component={NewItem} />
        <Route path="/edit-item" component={EditItem}/>
        <Route exact path="/login" component={Login} />
        <Route path="/settings" component={UserSetttings} /> 
    
      </Switch>
      
    </main>
  ) 
}

export default Main;