import React, { Component } from 'react';
import Header from '../../components/Header';
import Nav from '../../components/NavBar';
import Main from '../../components/Main';
import logo from '../../logo.svg';
import '../../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <p className="App-intro">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Consume More Stuff!</h1>
        </header>
        <p className="App-intro">
          Go Team CRUDs!
          <br/>
          To get started, stand on your left foot, rub your nose, and hum the theme to Jurassic Park.
          <br/>
          Don't forget to be nice to yourself!
          <br/>
          <iframe src="https://giphy.com/embed/2hgAt92zs4qbp9Ld4W" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/evite-puppy-casual-2hgAt92zs4qbp9Ld4W">via GIPHY</a></p>

        </p> */}


        <Header />
        <div className="page-container">
          <Nav />
          <Main />
        </div>

        </p>

      </div>
    );
  }
}

export default App;
