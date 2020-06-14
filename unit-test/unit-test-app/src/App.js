import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentTest1 from './components/Test1/ComponentTest1';

function App() {
  return (
    <div className="App">
      <h1>
        Introduccion a Unit Testing
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum consequatur, debitis ratione cupiditate omnis asperiores tenetur nam facilis nemo iste possimus doloribus tempora placeat natus hic veniam, magnam voluptates sunt!
      </p>
      <h2>Otro marcado</h2>
      <ComponentTest1/>
    </div>
  );
}

export default App;
