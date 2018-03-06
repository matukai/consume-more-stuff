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
import NewItem from '../containers/NewItem';
import EditItem from '../containers/EditItem';


const Main = (props) => {

  return (
    <main className="page-content">

      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/register" />
        <Route exact path="/new-item" component={NewItem} />
        <Route path="/edit-item" component={EditItem}/>
        <Route path="/settings" /> 
    
      </Switch>
      
    </main>
  ) 
}



export default Main