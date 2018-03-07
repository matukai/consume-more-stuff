import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


import { getCategory } from '../../actions/itemActions';
import Header from '../../components/Header';
import Nav from '../../components/NavBar';
import Main from '../../components/Main';
import logo from '../../logo.svg';
import '../../App.css';
import Home from '../Home/index';
import reducers from '../../reducers/itemReducer';

// SMOKE TEST FOR AXIOS: open inspector and look at {}
// axios.get(`/api/items`)
// .then(result => {
//   console.log('SMOKE')
// })

class App extends Component {
  // constructor (props) {
  //   super (props);
  //   this.state = {
  //     categories: []
  //   }
  // }

  // componentWillMount() {
  //   this.props.getCategory()
  // }

  render() {
    return (
      <div className="App">

        <Header />
        <div className="page-container">
          <Nav />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
