import "https://kit.fontawesome.com/dd666df02f.js";
import 'bootstrap-social/bootstrap-social.css';
import './App.css';
import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import Main from './components/MainComponent';

class App extends Component {
  
  render() {
    return(
      <BrowserRouter>
        <div className='App'>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
