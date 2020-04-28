import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import { todos } from './todos.json';
//console.log(todos);

function App() {

  return (
    <div className="App">
        <Navigation title='Mi primera Navegacion'/>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
