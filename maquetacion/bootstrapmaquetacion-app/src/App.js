import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import HeaderComponent from './pages/HeaderComponent';
import MainComponent from './pages/MainComponent';
import {FooterComponent} from './pages/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent title="Maquetación"/>
      <MainComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
