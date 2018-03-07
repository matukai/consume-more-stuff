import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import RegisterUser from '../containers/RegisterUser';
import Login from '../containers/Login';
import UserSetttings from '../containers/UserSettings';
import NewItem from '../containers/NewItem';
import EditItem from '../containers/EditItem';
import ItemList from '../containers/ItemList/index';
import Categories from '../components/Categories';
import NoMatch from '../components/NoMatch';

const Main = (props) => {
// const catId = this.props.match.params.id;
  return (
    <main className="page-content">

      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/items" component={ ItemList } />
        <Route exact path="/new-item" component={ NewItem } />
        <Route path="/edit-item" component={ EditItem }/>
        <Route path="/categories" component={ Categories } />
        <Route exact path="/categories/:id" component={ Categories } />
        

        <Route exact path="/register" component={ RegisterUser } />
        <Route exact path="/login" component={ Login } />
        <Route path="/settings" component={ UserSetttings } /> 
        <Route component={ NoMatch }/>
      </Switch>
      
    </main>
  ) 
}

export default Main;