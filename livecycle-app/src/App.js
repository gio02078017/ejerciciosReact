import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';

class App extends Component {

  render(){
    return (
      <div className="App">
        <HeaderComponent title='LiveCycle'/>
        <MainComponent/>
      </div> 
    )
  }
}

export default App;
